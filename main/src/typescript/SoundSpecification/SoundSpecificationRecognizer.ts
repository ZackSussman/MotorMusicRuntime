

//here we solve the problem of determining for a given syllable, which sound specification (if any) it belongs to

import { SoundSpecification } from "./SoundSpecification";
import {AscendMajorScaleAsTensionIncreases, TwelveTET, ShashavicSpecification} from "./PitchSpecification";


export function getSpecificationClassForSyllable(syllable : string) : SoundSpecification<any> | undefined {
    // List of all known SoundSpecification classes
    const specifications: SoundSpecification<any>[] = [
    //1) pitch specifications
        new AscendMajorScaleAsTensionIncreases(),
        new TwelveTET(440),
        //TODO: debug issues that arose with the Shashavic specification
        //new ShashavicSpecification(440, "ShashavicDefault"), 
        // Add other specifications here as needed
    ];

    for (const spec of specifications) {
        if (spec.isSyllableInSpecification(syllable)) {
            return spec;
        }
    }
    return undefined; // No matching specification found
}