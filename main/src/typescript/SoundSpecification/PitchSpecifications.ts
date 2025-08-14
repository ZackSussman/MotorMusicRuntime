
let major_scale_scan = [0, 2, 4, 5, 7, 9, 11, 12];



export abstract class PitchSpecification {
    //converts the syllable and tension at a point in the program to the pitch that should be perceived for that syllable 
    abstract syllableAndTensionToPitch(syllable : string, tension : number) : number; //hz
    //determines whether or not the syllable is valid for this particular way of specifying pitches
    abstract validateSyllable(syllable : string) : boolean;
}


//gives the same behavior as MotorMusic 0.0 
export class Default extends PitchSpecification {
    //already validated by the parser
    validateSyllable(syllable : string) : boolean {
        // Regex: [qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]* | [aeiuyo]+[qtplkjgfdszxcvbnmhrw]*
        const regex = /^([qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]*|[aeiuyo]+[qtplkjgfdszxcvbnmhrw]*)$/;
        return regex.test(syllable);
    }
    
    //map the unit range that is used for tension values to the frequency value of a note from the major scale
    //this is the default method used to select pitch if the user did not want to use a pitch specification
    syllableAndTensionToPitch(_ : string, tension : number) : number {
         let note = undefined
        //round for normal notes but not at the final transition
        if (tension < 6/7) 
            note = Math.round(tension * 7);
        else
            note = Math.floor(tension * 7);
        return 440 * Math.pow(2, major_scale_scan[note]/12);
    }
}


export class TwelveTET extends PitchSpecification {
    frequencyOfA4 : number;
    constructor(frequencyOfA4 : number) {
        super();
        this.frequencyOfA4 = frequencyOfA4;
    }


    validateSyllable(syllable : string) : boolean {
        // Valid note: C, C#, Cb, D, D#, Db, ..., B, B#, Bb, with optional octave 0-8
        const regex = /^(A|B|C|D|E|F|G)(#|b)?([0-8])?$/;
        return regex.test(syllable);
    }

    syllableAndTensionToPitch(syllable: string, _: number) : number {
        // Parse note and octave
        const match = syllable.match(/^(A|B|C|D|E|F|G)(#|b)?([0-8])?$/);
        if (!match) return NaN;
        const note = match[1];
        const accidental = match[2] || '';
        const octave = match[3] !== undefined ? parseInt(match[3]) : 4;

        // Map note names to semitone offsets from C
        const noteOffsets: { [key: string]: number } = {
            'C': 0,
            'D': 2,
            'E': 4,
            'F': 5,
            'G': 7,
            'A': 9,
            'B': 11
        };
        let semitone = noteOffsets[note];
        if (accidental === '#') semitone += 1;
        if (accidental === 'b') semitone -= 1;

        // Calculate pitch number
        const pitchNumber = (octave + 1) * 12 + semitone;
        // pitch number for A4 is 69
        const a4Number = 69;
        // Calculate frequency
        return this.frequencyOfA4 * Math.pow(2, (pitchNumber - a4Number) / 12);
    }
}


export function resolvePitchSpecificationString(pitchSpecificationString : string) : PitchSpecification {
    let tsCode = pitchSpecificationString.trim();

    // Restrict to only allowed class instantiations
    const allowedClasses = [
        "Default",
        "TwelveTET"
    ];
    // Regex: must start with allowed class name and end with parentheses
    const instantiationRegex = new RegExp(`^(${allowedClasses.join("|")})\\s*\(.*\)$`);
    if (!instantiationRegex.test(tsCode)) {
        throw new Error("Pitch specification string must start with an allowed class name and end with parentheses.");
    }
    // If 'new' is missing, add it
    if (!tsCode.startsWith("new")) {
        tsCode = "new " + tsCode;
    }
    // eslint-disable-next-line no-eval
    return eval(tsCode) as PitchSpecification;
}
