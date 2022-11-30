// Determine the Hamming distance for two given strings.
const HammingDistance = (sourceTextA: string, sourceTextB: string): number => {
    // Throw an error if the two strings are different lengths.
    if(sourceTextA.length != sourceTextB.length) {
        throw Error('Error: lists are not the same length!');
    }
    
    let result = 0;
    for(let i=0; i<sourceTextA.length; i++) {
        result += HammingCompare(sourceTextA[i], sourceTextB[i]);
    }
    return result;
};

// Return 0 if characters match, otherwise return 1.
const HammingCompare = (a: any, b: any): number => {
    if(a === b) {
        return 0;
    }
    return 1;
};

export default HammingDistance;