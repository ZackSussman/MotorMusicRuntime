

/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";

import {EmptyProgramContext, NonEmptyProgramWithPitchSpecificationContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedEmptyContext, TimeTaggedSyllableGroupContext, EmptyContext, DirectionSpecContext, NonEmptyProgramWithDefaultPitchSpecificationContext, PitchSpecificationStatementContext, ContainmentContext} from "../../../../antlr/generated/MotorMusicParser";
import { durationToSamples } from "../audio/Audio";
 import {DELAY_BEFORE_PLAYBACK_START} from "../../runtime-business/RuntimeConstants";
import {audio, audioStream, audioToAudioStream, silence, seconds, sampleMap} from "../audio/Audio";
import {makeSin} from "../audio/generators/Sin";
import {applyAdsr} from "../audio/transformers/Envelope";

import {BraceAccumData} from "./Animations";

import { resolvePitchSpecificationString, PitchSpecification} from "../SoundSpecification/PitchSpecifications";
import { ContainingSyllableGroupData } from "./SyllableGroupProcess";

export class AudioGeneratorListener extends MotorMusicParserListener {

    syllableLength : seconds;

    pitchSpecification : PitchSpecification;

    //this is where we will write the final audio to
    audioStream : audioStream;

    accumulatedSyllableGroupSize : number = 0; //this is the size of the syllable group we are currently processing, we must store it so we can normalize the audio at the end 
    accumulatedSyllableGroupAudio : audio = []; //this is the audio for the syllable group we are currently processing, it will be added to the audioStream at the end of the syllable group

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
    currentLeafSyllableGroupTimeTag : number //the amount of time specified in fr
    
    containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>;

    //as we build up the audio stream, we may not be adding onto the very end. This is due to the containment contruct, where
    //we add on the containment syllable group before its contained samples. In this case, we set this value to the beginning
    //of that group. Otherwise this value should point to the end of the audio stream. 
    currentAudioSeekPosition : number;

    constructor(syllableLength : number, 
                parensAccumData : Map<DirectionSpecContext | ContainmentContext, BraceAccumData>,
                containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>) {
        super();
        this.syllableLength = syllableLength / 1000; //syllableLength on input is in milliseconds 
        this.bracesAccumData = parensAccumData;
        this.currentBracesInScope = [];
        this.audio = new Array(durationToSamples(DELAY_BEFORE_PLAYBACK_START / 1000)).fill([0, 0]); //this is to fix the initial click of starting the audio context and then throwing sound out, it just forces the audio to start peacefully for about .1 seconds first
        this.currentLeafSyllableGroupIndex = 0;
        this.currentLeafSyllableGroupTimeTag = 1; //keep this at 1 unless changed by a time tagged syllable group
        this.areWeCurrentlyInAContainmentGroup = false;
        this.containmentGroupData = containmentGroupData;
        this.currentAudioSeekPosition = this.audio.length;
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
    private getCurrentSyllableTension() {
        const MIN_TENSION = 0.5
        let tension = 1;
        for (let directionSpecCtx of this.currentBracesInScope) {
            console.log("we have a direction spec in scope");
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

        //simple case: seek position is at end of the audio and we can just append samples
        if (this.currentAudioSeekPosition == this.audio.length) {
            console.log("add to audio: simple case");
            for (let sample of a) {
                this.audio.push(sample);
            }
            this.currentAudioSeekPosition = this.audio.length;
            return;
        }

        //otherwise we need to take the samples that are currently there and mix them together
        let samplesToBlend = this.audio.slice(this.currentAudioSeekPosition, this.currentAudioSeekPosition + a.length);
        let blendedSamples : audio = [];

        for (let i = 0; i < samplesToBlend.length; i++) {
            blendedSamples.push([(samplesToBlend[i][0] + a[i][0]), (samplesToBlend[i][1] + a[i][1])]);
        }

        for (let i = this.currentAudioSeekPosition; i < this.currentAudioSeekPosition + blendedSamples.length; i++) {
            this.audio[i] = blendedSamples[i - this.currentAudioSeekPosition];
        }
        this.currentAudioSeekPosition += a.length;
    }

    enterDirectionSpec = (ctx: DirectionSpecContext) => {
        this.currentBracesInScope.push(ctx);
    }

    exitDirectionSpec = (_: DirectionSpecContext) => {
        this.currentBracesInScope.pop();
    }

    enterContainment = (ctx: ContainmentContext) => {
        this.areWeCurrentlyInAContainmentGroup = true;
        let syllablesToCompute = this.containmentGroupData.get(ctx).syllables;
        let containmentLength = this.containmentGroupData.get(ctx).length;
        let audioForContainmentSyllableGroup : audio = [];
        for (let syllable of syllablesToCompute) {
            let audio = this.getAudioForSyllableWithMultiplier(syllable, containmentLength);
            if (audioForContainmentSyllableGroup.length == 0) {
                audioForContainmentSyllableGroup = audio;
            }
            else if (audioForContainmentSyllableGroup.length != audio.length) {
                throw new Error("Internal Error: audio lengths for syllable group do not match");
            }
            else {
                audioForContainmentSyllableGroup = audioForContainmentSyllableGroup.map((sample, index) => {
                    return [(sample[0] + audio[index][0]) / 2, (sample[1] + audio[index][1]) / 2];
                });
            }
        }

        let preContainmentChunkAuduioSeekPosition = this.currentAudioSeekPosition;
        this.addToAudio(audioForContainmentSyllableGroup);
        this.currentAudioSeekPosition = preContainmentChunkAuduioSeekPosition
        this.currentBracesInScope.push(ctx);
    }

    exitContainment = (ctx: ContainmentContext) => {
        this.currentBracesInScope.pop();
    }

    getAudioForSyllableWithMultiplier(syllable : string, syllableLengthMultiplier : number) : audio {
        let tension = this.getCurrentSyllableTension();
        console.log("the computed tension was " + tension);
        let thisSyllableLength = this.syllableLength * syllableLengthMultiplier;
        let attackTime = thisSyllableLength / 10;
        let tensionLowerBound = this.computeTensionLowerBound();
        let tensionRampedFromZeroToOne = 1;
        if (tensionLowerBound < 1)
            tensionRampedFromZeroToOne = tension/(1 - tensionLowerBound) - (tensionLowerBound/(1 - tensionLowerBound));
        const MAX_AGOGIC_SHORTENING = Math.min(0.15 * syllableLengthMultiplier, 0.15); //seconds
        let decay = (thisSyllableLength - attackTime) - MAX_AGOGIC_SHORTENING * (1.0 - tensionRampedFromZeroToOne);
        if (decay < attackTime) {
            decay = attackTime;
        }
        return applyAdsr
                (
                    makeSin(this.pitchSpecification.syllableAndTensionToFrequency(syllable, tensionRampedFromZeroToOne), thisSyllableLength),
                    attackTime,
                    decay,
                    0,
                    0,
                    .5 + 2*(1 - tensionRampedFromZeroToOne) //exponent
                ).map((sample) => sampleMap(sample, (sample) => sample * Math.sqrt(tension)));
    }
    
    getAudioForSyllable(syllable : string) : audio {
        return this.getAudioForSyllableWithMultiplier(syllable, this.currentLeafSyllableGroupTimeTag);
    }


  
    //construct the audio for a syllable and add to our built up audio
    enterSyllableGroupSingle =  (ctx : SyllableGroupSingleContext) => {
        if (this.areWeCurrentlyInAContainmentGroup) {
            return;
        }
        let audio = this.getAudioForSyllable(ctx.SYLLABLE().getText());
        if (this.accumulatedSyllableGroupAudio.length == 0) {
            this.addToAudio(audio);
        }
        else {
            //this audio must be the same length as the accumulated data. 
            if (this.accumulatedSyllableGroupAudio.length != audio.length) {
                throw new Error("Internal Error: audio lengths for syllable group do not match");
            }
            this.addToAudio(this.accumulatedSyllableGroupAudio.map((sample, index) => {
                return [(sample[0] + audio[index][0]) / (this.accumulatedSyllableGroupSize + 1), (sample[1] + audio[index][1]) / (this.accumulatedSyllableGroupSize + 1)];
            }));
        }
     
    };
    //called at the end of every syllable group
    exitSyllableGroupSingle = (_: SyllableGroupSingleContext) => {
        if (!this.areWeCurrentlyInAContainmentGroup) {
            this.currentLeafSyllableGroupIndex += 1;
            this.accumulatedSyllableGroupAudio = [];
            this.accumulatedSyllableGroupSize = 0;
        }
        else {
            this.areWeCurrentlyInAContainmentGroup = false;
        }
    }


    enterSyllableGroupMulti = (ctx : SyllableGroupMultiContext) => {
        if (!this.areWeCurrentlyInAContainmentGroup) {
            let audio = this.getAudioForSyllable(ctx.SYLLABLE().getText());
            this.accumulatedSyllableGroupSize += 1;
            //need to add this audio signal together with the current accumulated audio for this syllable group
            if (this.accumulatedSyllableGroupAudio.length == 0) {
                this.accumulatedSyllableGroupAudio = audio;
            }
            //this audio must be the same length as the accumulated data. 
            else if (this.accumulatedSyllableGroupAudio.length != audio.length) {
                throw new Error("Internal Error: audio lengths for syllable group do not match");
            }
            else {
                this.accumulatedSyllableGroupAudio = this.accumulatedSyllableGroupAudio.map((sample, index) => {
                    return [sample[0] + audio[index][0], sample[1] + audio[index][1]];
                });
            }
        }

    }

    enterTimeTaggedSyllableGroup = (ctx : TimeTaggedSyllableGroupContext) => {
        this.currentLeafSyllableGroupTimeTag = Number(ctx.NUMBER().getText());
    }
    exitTimeTaggedSyllableGroup = (_ : TimeTaggedSyllableGroupContext) => {
        this.currentLeafSyllableGroupTimeTag = 1;
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


    enterNonEmptyProgramWithDefaultPitchSpecification = (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
        this.pitchSpecification = resolvePitchSpecificationString("Default()");
        if (this.pitchSpecification === undefined) {
            throw new Error("Pitch Specification Initialization Failure");
        }
    }

    enterNonEmptyProgramWithPitchSpecification = (ctx : NonEmptyProgramWithPitchSpecificationContext) => {
        this.pitchSpecification = resolvePitchSpecificationString((ctx.pitch_specification_statement() as PitchSpecificationStatementContext).PITCH_SPECIFICATION_VALUE().getText());
        if (this.pitchSpecification === undefined) {
            throw new Error("Pitch Specification Initialization Failure");
        }
    }

    //prevents clipping
    private normalizeAudio() {
        let maxSampleValue = 0;
        for (let sample of this.audio) {
            maxSampleValue = Math.max(maxSampleValue, Math.abs(sample[0]), Math.abs(sample[1]));
        }
        this.audio = this.audio.map((sample) => [sample[0] / maxSampleValue, sample[1] / maxSampleValue]);
    }

    //when finished, convert our built up audio to the audio stream
    exitNonEmptyProgramWithDefaultPitchSpecification =  (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
        this.normalizeAudio();
        this.audioStream = audioToAudioStream(this.audio);
    }
    exitNonEmptyProgramWithPitchSpecification =  (_ : NonEmptyProgramWithPitchSpecificationContext) => {
        this.audioStream = audioToAudioStream(this.audio);
    }
    exitEmptyProgram =  (_ : EmptyProgramContext) => {
        this.audioStream = [];
    }


}