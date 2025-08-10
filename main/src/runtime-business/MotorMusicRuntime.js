
import { initializeAnimationRuntime, AnimationRuntimeData } from "./AnimationRuntime";
import  {initializeAudioRuntime, AudioRuntimeData } from "./AudioRuntime"

//here is where we initialize all the state for a given runtime and 
//pass it off to the audio runtime and animation runtime
//we collapse the result into one runtime which may be used by anyone
//who wishes to use the MotorMusic runtime 

export function initializeMotorMusicRuntime() {

    let audioRuntime = initializeAudioRuntime(new AudioRuntimeData(null, null, null, undefined));
    let animationRuntime = initializeAnimationRuntime(audioRuntime, 
        new AnimationRuntimeData(undefined, undefined, false, undefined, new Map(), new Map()));
    return {
        audioRuntime: audioRuntime,
        animationRuntime: animationRuntime
    }

}