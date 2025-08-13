import {audio, seconds, durationToSamples, sampleMap, numSamplesToDuration} from "../Audio"

//applies an adsr to the signal
//the sustain is from 0 to 1 and specifies how big the envelop should go
//the exponent is used to curve the decay 
export function applyAdsr(input : audio, 
                           attack : seconds,
                           decay : seconds, 
                           sustain : number, 
                           release : seconds,
                           exponent : number) : audio {

    let attackNumSamples = durationToSamples(attack);
    let decayNumSamples = durationToSamples(decay);
    let releaseNumSamples = durationToSamples(release);
    let sustainNumSamples = input.length - attackNumSamples - decayNumSamples - releaseNumSamples;

    //SPECIAL CASE: due to some kind of weird edge case rounding error, we sometimes have this case where 
    //the attack and decay num samples add to more than the total length. 
    //In order to adjust, we note that the sustainNumSamples is the amount that we overshot by, so we just remove that from the attack time. 
    if (sustainNumSamples <  0) {
        console.log("WARNING: rounding error lead to a negative sustain in sin wave generation, borrowing from attack by " + sustainNumSamples*(-1) + " samples");
        attackNumSamples += sustainNumSamples;
        sustainNumSamples = 0;
    }
    if (sustain > 1 || sustain < 0) {
        throw new Error("invalid sustain value: " + sustain);
    }

    return input.map((value : [number, number], index : number) => {
        if (index < attackNumSamples) {
            let interp = (index + 1)/attackNumSamples;
            return sampleMap(value, (sample : number) => sample * interp);
        }
        else if (index < attackNumSamples + decayNumSamples) {
            let decayIndex = index - attackNumSamples;
            let interp = Math.pow((decayIndex + 1) / decayNumSamples, exponent);
            return sampleMap(value, (sample : number) => (interp * sustain + (1.0 - interp)) * sample);
        }
        else if (index < attackNumSamples + decayNumSamples + sustainNumSamples ) {
            return sampleMap(value, (sample : number) => sample * sustain);
        }
        else {
            let releaseIndex = index - attackNumSamples - decayNumSamples - sustainNumSamples;
            let interp = (releaseIndex + 1)/releaseNumSamples;
            return sampleMap(value, (sample : number) => sustain * sample * (1.0 - interp));
        }
    });

}