
import { initializeAnimationRuntime, AnimationRuntimeData } from "./AnimationRuntime";
import  {initializeAudioRuntime, AudioRuntimeData } from "./AudioRuntime"

//here is where we initialize all the state for a given runtime and 
//pass it off to the audio runtime and animation runtime
//we collapse the result into one runtime which may be used by anyone
//who wishes to use the MotorMusic runtime 

//here is the data available to anyone who wishes to use the MotorMusic runtime
export class MotorMusicRuntimeData {
    getAudioContext; //the audio context being used for playback
    getComputedAudio; //the audio computed from the program 
    getGetAnimationInfoFunction; //the computed animation info function
    getAreWeCurrentlyPlayingBack; //whether we are currently playing back
    getCurrentColors; //a map from monaco ranges to their current colors
}

export function initializeMotorMusicRuntime() {

    //first create the audio runtime
    let audioContext = null; //we store the auido context within an object so that it can be shared by the audio and animation runtimes
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
    let animationRuntime = initializeAnimationRuntime(audioContext, new AnimationRuntimeData(getAnimationInfoFunction, startTime, areWeCurrentlyPlayingBack, intervalId, currentColors, colorClassNames));
    
    return {
        getAudioContext: () => audioContext,
        getComputedAudio: () => computedAudio,
        getGetAnimationInfoFunction: () => getAnimationInfoFunction,
        getAreWeCurrentlyPlayingBack: () => areWeCurrentlyPlayingBack,
        getCurrentColors: () => currentColors,
        audioRuntime: audioRuntime,
        animationRuntime: animationRuntime
    }

}