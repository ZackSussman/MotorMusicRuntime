
import { initializeAnimationRuntime, AnimationRuntimeData } from "./AnimationRuntime";
import  {initializeAudioRuntime, AudioRuntimeData } from "./AudioRuntime"

//here is where we initialize all the state for a given runtime and 
//pass it off to the audio runtime and animation runtime
//we collapse the result into one runtime which may be used by anyone
//who wishes to use the MotorMusic runtime 

export function initializeMotorMusicRuntime() {

    let audioRuntimeData = new AudioRuntimeData(null, null, null, undefined);
    let audioRuntime = initializeAudioRuntime(audioRuntimeData);
    let animationRuntimeData = new AnimationRuntimeData(undefined, undefined, false, undefined, new Map(), new Map());
    let animationRuntime = initializeAnimationRuntime(audioRuntimeData, animationRuntimeData);
    return {
        audioRuntimeData: audioRuntimeData,
        audioRuntime: audioRuntime,
        animationRuntime: animationRuntime,
        animationRuntimeData: animationRuntimeData
    }

}