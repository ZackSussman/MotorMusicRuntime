
import { initializeAnimationRuntime, AnimationRuntimeData } from "./AnimationRuntime";
import  {initializeAudioRuntime, AudioRuntimeData } from "./AudioRuntime"

//here is where we initialize all the state for a given runtime and 
//pass it off to the audio runtime and animation runtime
//we collapse the result into one runtime which may be used by anyone
//who wishes to use the MotorMusic runtime 

//here is the data available to anyone who wishes to use the MotorMusic runtime
export class MotorMusicRuntimeData {
    audioContext; //the audio context being used for playback
    computedAudio; //the audio computed from the program 
    getAnimationInfoFunction; //the computed animation info function
    areWeCurrentlyPlayingBack; //whether we are currently playing back
    currentColors; //a map from monaco ranges to their current colors
}

export function initializeMotorMusicRuntime() {

    //first create the audio runtime
    let audioContext = null;
    let processorNode = null;
    let gainNode = null;
    let computedAudio = undefined;
    let audioRuntime = initializeAudioRuntime(new AudioRuntimeData(audioContext, processorNode, gainNode, computedAudio));

    //next, create the animation runtime
    let getAnimationInfoFunction = undefined 
    let startTime = undefined; //initialize to undefined
    let areWeCurrentlyPlayingBack = false; // initialize to false
    let intervalId = undefined ; //initialize to undefined
    let currentColors = new Map(); 
    let colorClassNames = new Map();
    let animationRuntime = initializeAnimationRuntime(new AnimationRuntimeData(getAnimationInfoFunction, startTime, areWeCurrentlyPlayingBack, intervalId, currentColors, colorClassNames));
    
    return {
        audioContext,
        computedAudio,
        getAnimationInfoFunction,
        areWeCurrentlyPlayingBack,
        currentColors,
        audioRuntime,
        animationRuntime
    }

}