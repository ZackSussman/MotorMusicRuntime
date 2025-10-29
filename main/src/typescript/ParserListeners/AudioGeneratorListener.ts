

/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";

import {EmptyProgramContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedEmptyContext, TimeTaggedSyllableGroupContext, EmptyContext, DirectionSpecContext, NonEmptyProgramWithDefaultPitchSpecificationContext, ContainmentContext, SyllableGroupContext} from "../../../../antlr/generated/MotorMusicParser";
import { durationToSamples } from "../Audio/Audio";
 import {DELAY_BEFORE_PLAYBACK_START} from "../../runtime-business/RuntimeConstants";
import {audio, audioStream, audioToAudioStream, silence, seconds, sampleMap, numSamplesToDuration, mix} from "../Audio/Audio";
import {makeSin} from "../Audio/generators/Sin";
import {applyAdsr} from "../Audio/transformers/Envelope";

import {BraceAccumData} from "./Animations";
import { ContainingSyllableGroupData, PreColoringProcessedSyllableGroupData } from "./SyllableGroupProcess";
import { getSpecificationClassForSyllable } from "../SoundSpecification/SoundSpecificationRecognizer";
import { realizeSoundSpecifications } from "../Producer/Produce";

export class AudioGeneratorListener extends MotorMusicParserListener {

    syllableLength : seconds;

    //this is where we will write the final audio to
    audioStream : audioStream;

    //we build this up as we process the code and at the end we convert it to the stream
    audio : audio;

    //bracketsAccumData and parensAccumData are passed in from the animation parsing, they
    //store valuable info that allow ur to compute amplitudes for our signals
    //bracketsAccumData : Map<ConcatContext, BraceAccumData>
    bracesAccumData : Map<DirectionSpecContext | ContainmentContext, BraceAccumData>

    //store the set of current braces that are in scope
    currentBracesInScope : (DirectionSpecContext | ContainmentContext)[]

    areWeCurrentlyInAContainmentGroup : boolean;

    currentLeafSyllableGroupIndex : number //store the (global) index of the current syllable
    
    containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>;

    syllableGroupMap : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>;

    //we accumulate the audios for each containment group here 
    currentContainmentAudios : audio[];

    constructor(syllableLength : number, 
                syllableGroupMap : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>,
                parensAccumData : Map<DirectionSpecContext | ContainmentContext, BraceAccumData>,
                containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>) {
        super();
        this.syllableGroupMap = syllableGroupMap;
        this.syllableLength = syllableLength / 1000; //syllableLength on input is in milliseconds 
        this.bracesAccumData = parensAccumData;
        this.currentBracesInScope = [];
        this.audio = new Array(durationToSamples(DELAY_BEFORE_PLAYBACK_START / 1000)).fill([0, 0]); //this is to fix the initial click of starting the audio context and then throwing sound out, it just forces the audio to start peacefully for about .1 seconds first
        this.currentLeafSyllableGroupIndex = 0;
        this.areWeCurrentlyInAContainmentGroup = false;
        this.containmentGroupData = containmentGroupData;
        this.currentContainmentAudios = [];
    }


    //.5 is the lower bound for each level, and we have this.currentParensInScope.length levels,
    //where we are always taking a product of the tension from each level
    private computeTensionLowerBound() {
        return Math.pow(0.5, this.currentBracesInScope.length);
    }


    
    //this algorithm is particularly tricky to get right...we essentially have two types of 
    //linear 'triangle' curves each with a particular displacement from the center line. 
    //case 1: 
    //   {a b c | d e f}
    //    linearly ramps from a to d from 1 to MIN_TENSION and 
    //    d to an invisible syllable after f from MIN_TENSION to 1
    //case 2:
    //   (a b c | d e f)
    //    linearly ramps a to d from MIN_TENSION to 1 and
    //    d to an invisible syllable after f from 1 to MIN_TENSION
    private getCurrentSyllableGroupTension() {
        const MIN_TENSION = 0.5
        let tension = 1;
        console.log("entered getCurrentSyllableGroupTension");
        console.log("current braces in scope are: " + this.currentBracesInScope.map(ctx => ctx.getText()).join(", "));
        for (let directionSpecCtx of this.currentBracesInScope) {
            let parenInfo = this.bracesAccumData.get(directionSpecCtx);
            //need to determine for this particular level of motion, whether we are currently headed towards or away from, 
            //and where we are within that chunk             
            //parenInfo.sectionStartIndices is the sorted array of start indices of each section for this brace. Thus, 
            //the last one which is less than or equal to our start index is the first one we belong to. Note we may
            //not always obtain equality due to nesting of direction specs
            let currentSectionIndex = parenInfo.sectionStartIndices.findLastIndex(n => n <= this.currentLeafSyllableGroupIndex);
            let currentSectionFirstSyllableIndex = parenInfo.sectionStartIndices[currentSectionIndex];
            //pretty sure we can show that currentSectionIndex is never the last one due to how the tacked on one will never be the current syllable as the brace would be out of scope at that point
            let firstIndexAfterThisChunk = parenInfo.sectionStartIndices[currentSectionIndex + 1];
            let areWeGoingTowards = (parenInfo.startsWithTowards) == (currentSectionIndex % 2 == 0);
            let percentThroughChunk = (this.currentLeafSyllableGroupIndex - currentSectionFirstSyllableIndex) / (firstIndexAfterThisChunk - currentSectionFirstSyllableIndex);
            console.log("the section start indices are " + parenInfo.sectionStartIndices.join(","));
            if (areWeGoingTowards) {          
                tension *= percentThroughChunk + MIN_TENSION * (1 - percentThroughChunk);
            }
            else {
                tension *= (1 - percentThroughChunk) + MIN_TENSION * percentThroughChunk;
            }
        }
        return tension
    }
    

    //use this, which is O(|a|) for linear audio generation
    addToAudio(a : audio) {
        //If currentContainmentAudios is empty, then we just add a to the total audio
        //Otherwise, we must build the sound into the latest containment audio
        let audioToAddATo = this.currentContainmentAudios.at(-1) ?? this.audio;
        for (let sample of a) {
            audioToAddATo.push(sample);
        }
    }

    enterDirectionSpec = (ctx: DirectionSpecContext) => {
        this.currentBracesInScope.push(ctx);
    }

    exitDirectionSpec = (_: DirectionSpecContext) => {
        this.currentBracesInScope.pop();
    }


    private audioForSyllables(syllables : string[], syllableScale: number) : audio {
        if (syllables.length == 0) {
            throw new Error("Uh oh, audioForSyllables was called with an empty syllables array");
        }
        //console.log(`Generating audio for syllables: [${syllables.join(', ')}] with scale ${syllableScale}`);
        let tension = this.getCurrentSyllableGroupTension();
        let tensionLowerBound = this.computeTensionLowerBound();
        let tensionRampedFromZeroToOne = 1;
        if (tensionLowerBound < 1)
            tensionRampedFromZeroToOne = tension/(1 - tensionLowerBound) - (tensionLowerBound/(1 - tensionLowerBound));
      
        let result = realizeSoundSpecifications(syllables.map(syllable => [syllable, getSpecificationClassForSyllable(syllable)]), this.syllableLength * syllableScale, tensionRampedFromZeroToOne);
        // console.log(`Generated ${result.length} samples for syllables (${result.length / 48000} seconds)`);
        return result;
    }
    private audioForSyllableGroup(syllableGroupContext : SyllableGroupContext, scale = 1.0) : audio {
        //console.log("the syllable group context is: " + syllableGroupContext.getText());
        //console.log("the syllables in it are: " + this.syllableGroupMap.get(syllableGroupContext).syllables.join(","));
        return this.audioForSyllables(this.syllableGroupMap.get(syllableGroupContext).syllables, scale);
    }

    enterContainment = (ctx: ContainmentContext) => {
        this.currentContainmentAudios.push([]);
        this.areWeCurrentlyInAContainmentGroup = true;
        this.currentBracesInScope.push(ctx);
    }

    exitContainment = (ctx: ContainmentContext) => {
        this.currentBracesInScope.pop();

        let containingSyllablesToCompute = this.containmentGroupData.get(ctx).syllables;
        let containmentLength = this.containmentGroupData.get(ctx).length;
        let audioForContainingSyllableGroup : audio = this.audioForSyllables(containingSyllablesToCompute, containmentLength);

        let containedAudio = this.currentContainmentAudios.pop();

        if (containedAudio === undefined) {
            throw new Error("Internal Error: containedAudio is undefined in exitContainment");
        }

        this.addToAudio(mix(audioForContainingSyllableGroup, containedAudio));
    }
  

    enterSyllableGroup = (ctx : SyllableGroupContext) => { 
        if (this.areWeCurrentlyInAContainmentGroup) {
            return;
        }
        // console.log( ctx.getText());
        let audio = this.audioForSyllableGroup(ctx);
        this.addToAudio(audio);
        this.currentLeafSyllableGroupIndex += 1;
    }

    exitSyllableGroupSingle = (_: SyllableGroupSingleContext) => {
        if (this.areWeCurrentlyInAContainmentGroup) {
            this.areWeCurrentlyInAContainmentGroup = false;
        }
    }

    enterTimeTaggedSyllableGroup = (ctx : TimeTaggedSyllableGroupContext) => {
        if (this.areWeCurrentlyInAContainmentGroup) {
            return;
        }
        //console.log(ctx.getText());
        let audio = this.audioForSyllableGroup(ctx, Number(ctx.NUMBER().getText()));
        this.addToAudio(audio);
        this.currentLeafSyllableGroupIndex += 1;
    }


    exitEmpty = ( _ : EmptyContext) => {
        this.currentLeafSyllableGroupIndex += 1;
    }
    exitTimeTaggedEmpty = (_: TimeTaggedEmptyContext) => {
        this.currentLeafSyllableGroupIndex += 1;
    }
    

    enterEmpty = (_ : EmptyContext) => {
        this.addToAudio(
            silence(this.syllableLength)
        )
    }

    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        this.addToAudio(
            silence(this.syllableLength * Number(ctx.NUMBER().getText()))
        )
    }


    //prevents clipping
    private normalizeAndValidateAudio() {
        let maxSampleValue = 0;
        for (let sample of this.audio) {
            maxSampleValue = Math.max(maxSampleValue, Math.abs(sample[0]), Math.abs(sample[1]));
        }
        let normalizationFactor = maxSampleValue;
        this.audio = this.audio.map((sample) => [sample[0] / normalizationFactor, sample[1] / normalizationFactor]);
        for (let sample of this.audio) {
            if (Math.abs(sample[0]) > 1.0 || Math.abs(sample[1]) > 1.0) {
                throw new Error("Internal Error: audio sample out of range after normalization");
            }
        }
    }

    //when finished, convert our built up audio to the audio stream
    exitNonEmptyProgramWithDefaultPitchSpecification =  (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
        //console.log(`AudioGeneratorListener: Generated ${this.audio.length} total audio samples`);
        //console.log(`AudioGeneratorListener: Expected syllable length is ${this.syllableLength} seconds (${durationToSamples(this.syllableLength)} samples)`);
        console.log(`AudioGeneratorListener: Total audio duration: ${ numSamplesToDuration(this.audio.length)} seconds`);
        this.normalizeAndValidateAudio();
        this.audioStream = audioToAudioStream(this.audio);
        //console.log(`AudioGeneratorListener: Generated ${this.audioStream.length} audio buffers`);
    }
    exitEmptyProgram =  (_ : EmptyProgramContext) => {
        this.audioStream = [];
    }


}