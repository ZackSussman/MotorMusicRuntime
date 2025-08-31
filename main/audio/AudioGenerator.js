class AudioGenerator extends AudioWorkletProcessor {
    sampleArraysIndex;
    sampleArrays;
    
    constructor(options) {
        super();
        this.sampleArraysIndex = 0;
        this.sampleArrays = [...options.processorOptions.sampleArrays];
        console.log(`AudioGenerator initialized with ${this.sampleArrays.length} audio buffers`);
    }   
    
    process(inputs, outputs, parameters) {
        const output = outputs[0];
        const bufferSize = output[0].length;
        
        /*
        // Log buffer size on first call
        if (this.sampleArraysIndex === 0) {
            console.log(`AudioWorklet buffer size: ${bufferSize}, our audio buffer size: ${this.sampleArrays.length > 0 ? this.sampleArrays[0].length : 'N/A'}`);
        }
        */
       
        // If we've exhausted all sample arrays, output silence and stop
        if (this.sampleArraysIndex >= this.sampleArrays.length) {
            //console.log(`Audio playback finished. Processed ${this.sampleArraysIndex} buffers.`);
            for (let i = 0; i < bufferSize; i++) {
                output[0][i] = 0;
                output[1][i] = 0;
            }
            return false; // Signal that processing should stop
        }
        
        const sampleArray = this.sampleArrays[this.sampleArraysIndex];
        
        // Strict buffer size checking - error if mismatch
        if (sampleArray.length !== bufferSize) {
            console.error(`Buffer size mismatch at index ${this.sampleArraysIndex}: expected ${bufferSize}, got ${sampleArray.length}`);
            throw new Error(`Buffer size mismatch: expected ${bufferSize}, got ${sampleArray.length}`);
        }
        
        // Copy samples directly - no partial buffer handling
        for (let i = 0; i < bufferSize; i++) {
            output[0][i] = sampleArray[i][0];
            output[1][i] = sampleArray[i][1];
        }
        
        this.sampleArraysIndex += 1;
        
        /* log processing every 100 buffers
        if (this.sampleArraysIndex % 100 === 0) {
           console.log(`Processed ${this.sampleArraysIndex}/${this.sampleArrays.length} audio buffers`);
        }*/
        
        return true;
    }
}

registerProcessor("AudioGenerator", AudioGenerator);

export default AudioGenerator;