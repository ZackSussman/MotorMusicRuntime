


export abstract class PitchSpecification {
    //converts the syllable and tension at a point in the program to the pitch that should be perceived for that syllable 
    abstract syllableAndTensionToFrequency(syllable : string, tension : number) : number; //hz
    //determines whether or not the syllable is valid for this particular way of specifying pitches
    abstract validateSyllable(syllable : string) : boolean;
}


//gives the same behavior as MotorMusic 0.0 
export class Default extends PitchSpecification {
    //already validated by the parser
    validateSyllable(syllable : string) : boolean {
        // Regex: [qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]* | [aeiuyo]+[qtplkjgfdszxcvbnmhrw]*
        const regex = /^([qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]*|[aeiuyo]+[qtplkjgfdszxcvbnmhrw]*)$/; //no number here
        return regex.test(syllable);
    }
    
    //map the unit range that is used for tension values to the frequency value of a note from the major scale
    //this is the default method used to select pitch if the user did not want to use a pitch specification
    syllableAndTensionToFrequency(_ : string, tension : number) : number {
        let major_scale_scan = [0, 2, 4, 5, 7, 9, 11, 12];
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
        if (frequencyOfA4 === undefined) {
            throw new Error("Frequency value must be passed in");
        }
        this.frequencyOfA4 = frequencyOfA4;
    }


    validateSyllable(syllable : string) : boolean {
        // Valid note: C, C#, Cb, D, D#, Db, ..., B, B#, Bb, with optional octave 0-8
        const regex = /^(A|B|C|D|E|F|G)(#|b)?([0-8])?$/;
        return regex.test(syllable);
    }

    syllableAndTensionToFrequency(syllable: string, _: number) : number {
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


//based on a csv file which maps syllables to pitches 
export class ShashavicSpecification extends PitchSpecification {
    baseFrequency : number;
    spreadsheetName : string;
    syllableToRatioMap : Map<string, number>;

    // Synchronous constructor: performs a guarded synchronous XHR to load the CSV
    constructor(baseFrequency : number, spreadsheetName : string) {
        super();
        if (baseFrequency === undefined || spreadsheetName === undefined) {
            throw new Error("Base frequency and spreadsheet name must be provided");
        }
        this.baseFrequency = baseFrequency;
        this.spreadsheetName = spreadsheetName;
        this.syllableToRatioMap = new Map<string, number>();

        // synchronous XHR to load CSV from absolute path under public/
        const url = `/shashavic_pitch_specification_spreadsheets/${this.spreadsheetName}.csv`;
        const request = new XMLHttpRequest();
        try {
            request.open("GET", url, false);
            request.send(null);
        } catch (err) {
            throw new Error(`Could not load pitch specification spreadsheet: ${url} (${err})`);
        }

        // If server returned HTML (SPA fallback) some dev servers respond with 200 and index.html
        const contentType = request.getResponseHeader ? (request.getResponseHeader("Content-Type") || "") : "";
        const body = request.responseText || "";
        if (request.status !== 200 || contentType.toLowerCase().includes("text/html") || body.trim().startsWith("<")) {
            throw new Error(`Could not load pitch specification spreadsheet: ${url} (status ${request.status})`);
        }

        const lines = body.split(/\r?\n/);
        for (let line of lines) {
            if (!line) continue;
            const parts = line.split("|");
            if (parts.length < 2) continue;
            const syllable = parts[0];
            const ratioString = parts[1];
            const ratio = this.parseRatioString(ratioString);
            if (syllable && !isNaN(ratio)) {
                this.syllableToRatioMap.set(syllable.trim().toLowerCase(), ratio);
            }
        }
    }

    // Private helper to parse ratio strings like "5/4", "1.25", or "5"
    private parseRatioString(ratioString: string): number {
        const s = ratioString.trim();
        if (s.includes('/')) {
            const parts = s.split('/').map(p => p.trim());
            const top = parseFloat(parts[0]);
            const bottom = parseFloat(parts[1]);
            return top / bottom;
        }
        return parseFloat(s);
    }

    validateSyllable(syllable : string) : boolean {
        return this.syllableToRatioMap.has(syllable);
    }

    syllableAndTensionToFrequency(syllable: string, _: number) : number {
        return this.baseFrequency * this.syllableToRatioMap.get(syllable);
    }

}

export function resolvePitchSpecificationString(pitchSpecificationString : string) : PitchSpecification {
    // Parse the class name and arguments
    const match = pitchSpecificationString.match(/^(\w+)\s*\((.*)\)$/);
    if (!match) {
        throw new Error("Pitch specification string must be in format 'ClassName(args)'. We were given " + pitchSpecificationString);
    }
    
    const className = match[1];
    const argsString = match[2].trim();
    
    // Directly instantiate classes
    switch (className) {
        case "Default":
            return new Default();
        case "TwelveTET":
            if (!argsString) {
                throw new Error("TwelveTET requires a frequency argument");
            }
            const frequency = Number(argsString);
            if (isNaN(frequency)) {
                throw new Error("TwelveTET frequency must be a number");
            }
            return new TwelveTET(frequency);
        default:
            if (className.startsWith("Shashavic")) {
                if (!argsString) {
                    throw new Error("Shashavic pitch specifications require a base frequency argument");
                }
                // className like 'ShashavicName' => spreadsheet name is the remainder after 'Shashavic'
                const name = className.replace("Shashavic", "").trim();
                const baseFrequency = Number(argsString);
                if (isNaN(baseFrequency)) {
                    throw new Error("Shashavic base frequency must be a number");
                }
                try {
                    return new ShashavicSpecification(baseFrequency, name);
                } catch (error) {
                    throw new Error(`ShashavicSpecification: ${name} is not in the library or could not be loaded: ${error.message}`);
                }
            }
            throw new Error(`Unknown pitch specification class: ${className}`);
    }
}
