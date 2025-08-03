

import { PLAYBACK_SAMPLE_RATE } from "../../generated-javascript/main/src/runtime-business/RuntimeConstants.js";

export class AudioRuntimeData {
  audioContext; //initialize to null
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
      if (!audioRuntimeData.audioContext.value || audioRuntimeData.audioContext.value.state === 'closed') {
        audioRuntimeData.audioContext.value = new AudioContext({ latencyHint: "interactive", sampleRate: PLAYBACK_SAMPLE_RATE});
        audioRuntimeData.audioContext.value.resume();
      }
      return audioRuntimeData.audioContext.value;
    }

  return {

    initializeAudioContext: initializeAudioContext,

    setComputedAudio: function setComputedAudio(audio) {
      audioRuntimeData.computedAudio = audio;
    },

    //returns the starting time of audio playback
    beginNewPlayback: async function beginNewPlayback() {
      audioRuntimeData.audioContext.value = initializeAudioContext();

      if (audioRuntimeData.computedAudio == undefined) {
        throw new Error("error: cannot playback when computedAudio is undefined");
      }

      try {
        await audioRuntimeData.audioContext.value.resume();
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

      try {
        audioRuntimeData.processorNode = new AudioWorkletNode(audioRuntimeData.audioContext.value, "AudioGenerator", {
          channelCount: 2,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          processorOptions: {
            sampleArrays: audioRuntimeData.computedAudio,
          }
      });
      } catch (e) {
        try {
          const version = Date.now(); // Unique version for cache busting
          await audioRuntimeData.audioContext.value.audioWorklet.addModule(`./audio/AudioGenerator.js?version=${version}`);
          audioRuntimeData.processorNode = new AudioWorkletNode(audioRuntimeData.audioContext.value, "AudioGenerator", {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            processorOptions: {
              sampleArrays: audioRuntimeData.computedAudio,
            }
          });
        } catch (e2) {
          console.error("Error creating AudioWorkletNode:", e2);
          return;
        }
      }

      audioRuntimeData.gainNode = audioRuntimeData.audioContext.value.createGain();
      audioRuntimeData.processorNode.connect(audioRuntimeData.gainNode).connect(audioRuntimeData.audioContext.value.destination);
      return audioRuntimeData.audioContext.value.currentTime;
    },

    fadeOutAudio: function fadeOutAudio() {
      if (!audioRuntimeData.audioContext.value || !audioRuntimeData.gainNode || !audioRuntimeData.processorNode) return;

      const fadeOutDuration = 0.1;
      const currentTime = audioRuntimeData.audioContext.value.currentTime;

      audioRuntimeData.gainNode.gain.setValueAtTime(audioRuntimeData.gainNode.gain.value, currentTime);
      audioRuntimeData.gainNode.gain.linearRampToValueAtTime(0, currentTime + fadeOutDuration);

      setTimeout(() => {
        try { audioRuntimeData.processorNode.disconnect(); } catch (_) {}
        try { audioRuntimeData.gainNode.disconnect(); } catch (_) {}
        audioRuntimeData.processorNode = null;
        audioRuntimeData.gainNode = null;

        try {
          audioRuntimeData.audioContext.value.close();
        } catch (_) {}
        audioRuntimeData.audioContext.value = null;
      }, fadeOutDuration * 1000);
    }

  }

}