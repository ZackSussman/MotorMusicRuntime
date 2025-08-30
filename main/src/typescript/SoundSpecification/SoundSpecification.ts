

//defines an aspect of a sound that we want to fix, along with a language of how a specific subset of syllables map to values for that aspect
//members of the type T correspond to ways to specify the aspect of the sound that the sound specification is specifying 
export interface SoundSpecification <T> {
    name : string
    isSyllableInSpecification(syllable : string) : boolean
    syllableAndTensionToValue(syllable : string, tension : number) : T | undefined
}


