import ShiftTable from './ShiftTable';

/*
    Horspool's string matching algorithm.
    Input:  Takes in the source text and the pattern string to search for.
    Output: The index of the first character in the source text where the pattern is matched.
            Returns -1 if no match is found.
*/
const HorspoolStringMatch = (sourceText: string, pattern: string): number => {
    // Generate the table of shifts.
    const shiftTable = ShiftTable(pattern);

    // Start from the end of the pattern.
    let i = pattern.length - 1;

    while(i <= sourceText.length - 1) {
        // Number of matched characters.
        let k = 0;
        
        while((k <= pattern.length - 1) && (pattern.charAt(pattern.length - 1 - k) == sourceText.charAt(i - k))) {
            k++;
        }

        if(k == pattern.length) {
            return i - pattern.length + 1;
        } else {
            i = i + shiftTable[sourceText.charAt(i).charCodeAt(0)];
        }
    }

    return -1;
};

export default HorspoolStringMatch;