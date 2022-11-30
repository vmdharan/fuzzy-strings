/*
    Brute force string matching algorithm
    Input:  Takes in the source text and the pattern string to search for.
    Output: The index of the first character in the source text where the pattern is matched.
            Returns -1 if no match is found.
*/
const BruteForceStringMatch = (sourceText: string, pattern: string): number => {
    const len = sourceText.length - pattern.length;
    
    for(let i=0; i<len; i++) {
        let j = 0;
        while(j < pattern.length && pattern[j] == sourceText[i+j]) {
            j++;
        }

        if(j == pattern.length) {
            return i;
        }
    }

    return -1;
};

export default BruteForceStringMatch;