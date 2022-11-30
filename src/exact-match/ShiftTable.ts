export interface ShiftTableResultType {
    [key: string]: number;
}

/*
    Create a shift table to be used by both Horspool's and Boyer-Moore algorithms.
*/
const ShiftTable = (sourcePattern: string) => {
    const result: ShiftTableResultType = {};
    const uniqueCharsInPattern = [...uniqueChars(sourcePattern)];
    const alphabet = tableOfAsciiChars();

    // Initialise
    for(let i=0; i < alphabet.length; i++) {
        result[i] = sourcePattern.length;
    }

    for(let j=0; j < sourcePattern.length - 1; j++) {
        result[sourcePattern.charAt(j).charCodeAt(0)] = sourcePattern.length - 1 - j;
    }

    return result;
};

const tableOfAsciiChars = () => {
    const result: string[] = [];
    for(let i=0; i<256; i++) {
        result[i] = String.fromCharCode(i);
    }
    return result;
};

const uniqueChars = (sourcePattern: string): string => {
    const result = [...sourcePattern].reduce((accumulator, current) => {
        return accumulator.includes(current) ? accumulator : accumulator + current;
    });
    return result;
};

export default ShiftTable;