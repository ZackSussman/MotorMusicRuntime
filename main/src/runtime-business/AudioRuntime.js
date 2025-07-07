

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
    if (!audioRuntimeData.audioContext || audioRuntimeData.audioContext.state === 'closed') {
            audioRuntimeData.audioContext = new AudioContext({ latencyHint: "interactive", sampleRate: PLAYBACK_SAMPLE_RATE});
            audioRuntimeData.audioContext.resume();
          }
          return audioRuntimeData.audioContext;
      }
  }

  return {

    initializeAudioContext: initializeAudioContext,

    setComputedAudio: function setComputedAudio(audio) {
      audioRuntimeData.computedAudio = audio;
    },

    //returns the starting time of audio playback
    beginNewPlayback: async function beginNewPlayback() {
      audioRuntimeData.audioContext = initializeAudioContext();

      if (audioRuntimeData.computedAudio == undefined) {
        throw new Error("error: cannot playback when computedAudio is undefined");
      }

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

      try {
        audioRuntimeData.processorNode = new AudioWorkletNode(audioRuntimeData.audioContext, "AudioGenerator", {
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
          await audioRuntimeData.audioContext.audioWorklet.addModule(`/audio/AudioGenerator.js?version=${version}`);
          audioRuntimeData.processorNode = new AudioWorkletNode(audioRuntimeData.audioContext, "AudioGenerator", {
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

      audioRuntimeData.gainNode = audioRuntimeData.audioContext.createGain();
      audioRuntimeData.processorNode.connect(audioRuntimeData.gainNode).connect(audioRuntimeData.audioContext.destination);
      return audioRuntimeData.audioContext.currentTime;
    },

    fadeOutAudio: function fadeOutAudio() {
      if (!audioRuntimeData.audioContext || !audioRuntimeData.gainNode || !audioRuntimeData.processorNode) return;

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