import ShiftTable, { ShiftTableResultType } from './ShiftTable';

/*
    Boyer-Moore's string matching algorithm.
    Input:  Takes in the source text and the pattern string to search for.
    Output: The index of the first character in the source text where the pattern is matched.
            Returns -1 if no match is found.
*/
const BoyerMooreStringMatch = (sourceText: string, pattern: string): number => {
    // Generate the table of shifts.
    const shiftTable = badCharTable(pattern, ShiftTable(pattern));

    let i = 0;

    while(i <= (sourceText.length - pattern.length)) {
        // Start from the end of the pattern.
        let k = pattern.length - 1;

        while((k >= 0) && (pattern[k] == sourceText[i + k])) {
            k--;
        }

        // Pattern matched at index.
        if(k < 0) {
            if(i + pattern.length < sourceText.length) {
                const diff = pattern.length - shiftTable[sourceText[i + pattern.length].charCodeAt(0)];
                i += diff;
            } else {
                i++;
            }
            return i;
        } else {
            i += max(1, k - shiftTable[sourceText[i + k].charCodeAt(0)]);
        }
    }

    return -1;
};

const max = (m1: number, m2: number) => {
    if(m1 > m2) {
        return m1;
    }
    return m2;
};

const badCharTable = (pattern: string, shiftTable: ShiftTableResultType) => {
    const badCharShiftTable = shiftTable;

    // initialise
    for(let i=0; i<shiftTable.length; i++) {
        badCharShiftTable[i] = -1;
    }

    // last occurrence of character
    for(let j=0; j<pattern.length; j++) {
        badCharShiftTable[pattern[j].charCodeAt(0)] = j;
    }

    return badCharShiftTable;
};

export default BoyerMooreStringMatch; 