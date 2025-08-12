
import { initializeAnimationRuntime, AnimationRuntimeData } from "./AnimationRuntime";
import  {initializeAudioRuntime, AudioRuntimeData } from "./AudioRuntime"
import {initializeGlobalRuntime} from "../typescript/Compile";
import { DEFAULT_SYLLABLE_TIME } from "./RuntimeConstants";

//here is where we initialize all the state for a given runtime and 
//pass it off to the audio runtime and animation runtime
//we collapse the result into one runtime which may be used by anyone
//who wishes to use the MotorMusic runtime 


//data pertinent to all areas of the motormusic-runtime
class GlobalRuntimeData {
   syllableTime; 
   constructor(syllableTime) {
    this.syllableTime = syllableTime;
   }
}

                                      // the client can pass in these functions to be ran at the appropriate times
export function initializeMotorMusicRuntime(onPlaybackStart = () => {}, onPlaybackStop = () => {}) {

    let globalRuntimeData = new GlobalRuntimeData(DEFAULT_SYLLABLE_TIME);
    let audioRuntimeData = new AudioRuntimeData(null, null, null, undefined);
    let audioRuntime = initializeAudioRuntime(audioRuntimeData);
    let animationRuntimeData = new AnimationRuntimeData(undefined, undefined, false, undefined, new Map(), new Map());
    let animationRuntime = initializeAnimationRuntime(globalRuntimeData, audioRuntimeData, animationRuntimeData, onPlaybackStart, onPlaybackStop);
    
    let globalRuntime = initializeGlobalRuntime(globalRuntimeData);

    return {
        audioRuntimeData: audioRuntimeData,
        audioRuntime: audioRuntime,
        animationRuntime: animationRuntime,
        animationRuntimeData: animationRuntimeData,
        globalRuntime: globalRuntime
    }

}