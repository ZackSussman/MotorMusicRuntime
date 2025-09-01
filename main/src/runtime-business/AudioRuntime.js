

import { PLAYBACK_SAMPLE_RATE } from "../../generated-javascript/main/src/runtime-business/RuntimeConstants.js";
import { numSamplesToDuration } from "../typescript/audio/Audio.js";

export class AudioRuntimeData {
  audioContext; //initialize to {value: null}
  processorNode; //initialize to null
  gainNode; //initialyize to null
  computedAudio; //initialize to undefined
  constructor(audioContext, processorNode, gainNode, computedAudio) {
    this.audioContext = audioContext;
    this.processorNode = processorNode;
    this.gainNode = gainNode;
    this.computedAudio = computedAudio;
  }
}

export function initializeAudioRuntime(audioRuntimeData) {


  function initializeAudioContext() {
      if (!audioRuntimeData.audioContext || audioRuntimeData.audioContext.state === 'closed') {
        audioRuntimeData.audioContext = new AudioContext({ latencyHint: "interactive", sampleRate: PLAYBACK_SAMPLE_RATE});
        console.log(`AudioContext created with state: ${audioRuntimeData.audioContext.state}, sample rate: ${audioRuntimeData.audioContext.sampleRate}`);
        
        /*
        // Monitor state changes
        audioRuntimeData.audioContext.onstatechange = () => {
          if (audioRuntimeData.audioContext) {
            console.log(`AudioContext state changed to: ${audioRuntimeData.audioContext.state}`);
          }
        };
        */
        
        audioRuntimeData.audioContext.resume();
      }
      return audioRuntimeData.audioContext;
    }

  return {

    initializeAudioContext: initializeAudioContext,

    setComputedAudio: function setComputedAudio(audio) {
      //console.log("the length of the set computed audio is: " + numSamplesToDuration(audio.length));
      audioRuntimeData.computedAudio = audio;
    },

    //returns the starting time of audio playback
    beginNewPlayback: async function beginNewPlayback() {
      initializeAudioContext();

      if (audioRuntimeData.computedAudio == undefined) {
        throw new Error("error: cannot playback when computedAudio is undefined");
      }

      console.log("Starting playback with", audioRuntimeData.computedAudio.length, "audio buffers");

      try {
        await audioRuntimeData.audioContext.resume();
      } catch (error) {
        console.error("Unable to resume audio context:", error);
        return;
      }

      // Disconnect previous nodes if they exist
      if (audioRuntimeData.processorNode) {
        try { audioRuntimeData.processorNode.disconnect(); } catch (_) {}
        audioRuntimeData.processorNode = null;
      }

      if (audioRuntimeData.gainNode) {
        try { audioRuntimeData.gainNode.disconnect(); } catch (_) {}
        audioRuntimeData.gainNode = null;
      }

      // Always ensure the AudioWorklet module is loaded first
      try {
        const version = Date.now(); // Unique version for cache busting
        await audioRuntimeData.audioContext.audioWorklet.addModule(`./audio/AudioGenerator.js?version=${version}`);
      } catch (moduleError) {
        console.error("Failed to load AudioWorklet module:", moduleError);
        return;
      }

      // Now create the AudioWorkletNode
      try {
        audioRuntimeData.processorNode = new AudioWorkletNode(audioRuntimeData.audioContext, "AudioGenerator", {
          channelCount: 2,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          processorOptions: {
            sampleArrays: audioRuntimeData.computedAudio,
          }
        });
        
        // Add error monitoring
        audioRuntimeData.processorNode.onprocessorerror = (event) => {
          console.error("AudioWorklet processor error:", event);
        };
        
        // Monitor when the processor node stops
        audioRuntimeData.processorNode.addEventListener('message', (event) => {
          console.log("Message from AudioWorklet:", event.data);
        });
        
      } catch (nodeError) {
        console.error("Failed to create AudioWorkletNode:", nodeError);
        return;
      }

      audioRuntimeData.gainNode = audioRuntimeData.audioContext.createGain();
      audioRuntimeData.processorNode.connect(audioRuntimeData.gainNode).connect(audioRuntimeData.audioContext.destination);
      return audioRuntimeData.audioContext.currentTime;
    },

    fadeOutAudio: function fadeOutAudio() {
      if (!audioRuntimeData.audioContext|| !audioRuntimeData.gainNode || !audioRuntimeData.processorNode) return;

      const fadeOutDuration = 0.1;
      const currentTime = audioRuntimeData.audioContext.currentTime;

      audioRuntimeData.gainNode.gain.setValueAtTime(audioRuntimeData.gainNode.gain.value, currentTime);
      audioRuntimeData.gainNode.gain.linearRampToValueAtTime(0, currentTime + fadeOutDuration);

      setTimeout(() => {
        try { audioRuntimeData.processorNode.disconnect(); } catch (_) {}
        try { audioRuntimeData.gainNode.disconnect(); } catch (_) {}
        audioRuntimeData.processorNode = null;
        audioRuntimeData.gainNode = null;

        try {
          audioRuntimeData.audioContext.close();
        } catch (_) {}
        audioRuntimeData.audioContext = null;
      }, fadeOutDuration * 1000);
    }

  }

}