

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


    currentSyllableGroupIndex : number //store the (global) index of the current syllable
    currentSyllableGroupTimeTag : number //the amount of time specified in front of the syllable group...if not present, default to 1

    constructor(syllableLength : number, 
                parensAccumData : Map<DirectionSpecContext | ContainmentContext, BraceAccumData>) {
        super();
        this.syllableLength = syllableLength / 1000; //syllableLength on input is in milliseconds 
        this.bracesAccumData = parensAccumData;
        this.currentBracesInScope = [];
        this.audio = new Array(durationToSamples(DELAY_BEFORE_PLAYBACK_START / 1000)).fill([0, 0]); //this is to fix the initial click of starting the audio context and then throwing sound out, it just forces the audio to start peacefully for about .1 seconds first
        this.currentSyllableGroupIndex = 0;
        this.currentSyllableGroupTimeTag = 1; //keep this at 1 unless changed by a time tagged syllable group
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
            let parenInfo = this.bracesAccumData.get(directionSpecCtx);
            //need to determine for this particular level of motion, whether we are currently headed towards or away from, 
            //and where we are within that chunk             
            //parenInfo.sectionStartIndices is the sorted array of start indices of each section for this brace. Thus, 
            //the last one which is less than or equal to our start index is the first one we belong to. Note we may
            //not always obtain equality due to nesting of direction specs
            let currentSectionIndex = parenInfo.sectionStartIndices.findLastIndex(n => n <= this.currentSyllableGroupIndex);
            let currentSectionFirstSyllableIndex = parenInfo.sectionStartIndices[currentSectionIndex];
            //pretty sure we can show that currentSectionIndex is never the last one due to how the tacked on one will never be the current syllable as the brace would be out of scope at that point
            let firstIndexAfterThisChunk = parenInfo.sectionStartIndices[currentSectionIndex + 1];
            let areWeGoingTowards = (parenInfo.startsWithTowards) == (currentSectionIndex % 2 == 0);
            let percentThroughChunk = (this.currentSyllableGroupIndex - currentSectionFirstSyllableIndex) / (firstIndexAfterThisChunk - currentSectionFirstSyllableIndex);
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

        for (let sample of a) {
            this.audio.push(sample);
        }
    }

    enterDirectionSpec = (ctx: DirectionSpecContext) => {
        this.currentBracesInScope.push(ctx);
    }

    exitDirectionSpec = (_: DirectionSpecContext) => {
        this.currentBracesInScope.pop();
    }
    
    getAudioForSyllable(syllable : string ) : audio {
        let tension = this.getCurrentSyllableTension();
        let syllableLengthMultiplier = this.currentSyllableGroupTimeTag;
        let thisSyllableLength = this.syllableLength * syllableLengthMultiplier;
        let attackTime = thisSyllableLength / 10;
        let tensionLowerBound = this.computeTensionLowerBound();
        let tensionRampedFromZeroToOne = 1;
        if (tensionLowerBound < 1)
            tensionRampedFromZeroToOne = tension/(1 - tensionLowerBound) - (tensionLowerBound/(1 - tensionLowerBound));
    
        let decay  = (thisSyllableLength - attackTime) * Math.pow(tensionRampedFromZeroToOne, 0.5);
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
  
    //construct the audio for a syllable and add to our built up audio
    enterSyllableGroupSingle =  (ctx : SyllableGroupSingleContext) => {
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
        this.currentSyllableGroupIndex += 1;
        this.accumulatedSyllableGroupAudio = []; 
        this.accumulatedSyllableGroupSize = 0;
    }


    enterSyllableGroupMulti = (ctx : SyllableGroupMultiContext) => {
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

    enterTimeTaggedSyllableGroup = (ctx : TimeTaggedSyllableGroupContext) => {
        this.currentSyllableGroupTimeTag = Number(ctx.NUMBER().getText());
    }
    exitTimeTaggedSyllableGroup = (_ : TimeTaggedSyllableGroupContext) => {
        this.currentSyllableGroupTimeTag = 1;
    }

    exitEmpty = ( _ : EmptyContext) => {
        this.currentSyllableGroupIndex += 1;
    }
    exitTimeTaggedEmpty = (_: TimeTaggedEmptyContext) => {
        this.currentSyllableGroupIndex += 1;
    }
    

    enterEmpty = (_ : EmptyContext) => {
        this.addToAudio(
            silence(this.syllableLength)
        )
    }

    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        let noSoundLength = Number(ctx.NUMBER().getText());
        this.addToAudio(
            silence(this.syllableLength * noSoundLength)
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

    //when finished, convert our built up audio to the audio stream
    exitNonEmptyProgramWithDefaultPitchSpecification =  (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
        this.audioStream = audioToAudioStream(this.audio);
    }
    exitNonEmptyProgramWithPitchSpecification =  (_ : NonEmptyProgramWithPitchSpecificationContext) => {
        this.audioStream = audioToAudioStream(this.audio);
    }
    exitEmptyProgram =  (_ : EmptyProgramContext) => {
        this.audioStream = [];
    }


}