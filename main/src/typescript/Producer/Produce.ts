import { audio, sampleMap } from "../Audio/Audio";
import { SoundSpecification } from "../SoundSpecification/SoundSpecification";
import { applyAdsr } from "../Audio/transformers/Envelope";
import { makeSin } from "../Audio/generators/Sin";



//as duration is the only mandatory specification, we don't have a sound specification for it, and instead we always
//pass it into this function directly 
//as for the tension, it is the parameter in the ongoing musical experience which we must use to make functional decisions as to how we 
//ascribe to all the diffirent sound specifications 
export function realizeSoundSpecifications(specifications : [string, SoundSpecification<any>][], duration : number, tension : number) : audio{

    let attackTime = duration / 10;
    const MAX_AGOGIC_SHORTENING = Math.min(0.15 * duration, 0.15); //seconds
    let decay = (duration - attackTime) - MAX_AGOGIC_SHORTENING * (1.0 - tension);
    if (decay < attackTime) {
        decay = attackTime;
    }

    // implement all the pitch specifications as sin waves
    let pitchImplementations: audio[] = [];

    function makeSinForFrequency(frequency: number): audio {
        // Assume syllableLength is duration for now
        return applyAdsr(
            makeSin(frequency, duration),
            attackTime,
            decay,
            0,
            0,
            .5 + 2 * (1 - tension)
        ).map((sample) => sampleMap(sample, (sample) => sample * Math.sqrt(tension)));
    }

    for (let [syllable, specification] of specifications) {
        if (specification.name === "Pitch") {
            let frequency = specification.syllableAndTensionToValue(syllable, tension);
            pitchImplementations.push(makeSinForFrequency(frequency));
        }
    }

    // Sum and normalize sin waves
    let numPitches = pitchImplementations.length;
    if (numPitches === 0) {
        throw new Error("Completely ridiculous error has occured within the MotorMusic Producer");
    }

    // Assume all the pitch implementations are the same length
    let pitchImplementationLength = pitchImplementations[0].length;
    let audio: audio = new Array(pitchImplementationLength).fill([0, 0]);
    for (let i = 0; i < pitchImplementationLength; i++) {
        let left = 0, right = 0;
        for (let pitchImplementation of pitchImplementations) {
            left += pitchImplementation[i][0];
            right += pitchImplementation[i][1];
        }
        audio[i] = [left / numPitches, right / numPitches];
    }

    return audio;
}