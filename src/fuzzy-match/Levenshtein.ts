// Levenshtein.ts
// Measure the distance between two strings, i.e. the number of 
// single character edits (insertions, deletions, substitutions) 
// required to transform one string into the other.

// Return the minimum of three integers.
const lMinimum = (x: number, y: number, z: number): number => {
    if(x <= y && x <= z) {
        return x;
    } else if(y <= x && y <= z) {
        return y;
    }
    return z;
};

// Main entry point.
// Calculate the Levenshtein distance for two strings.
// Requires two strings for comparison (xs and ys).
const LevenshteinDistance = (xs: string, ys: string): number => {
    return Levenshtein(xs, xs.length, ys, ys.length);
};

// Auxiliary function that does the processing.
// Takes in string1, string1's length, string2 and string2's length.
// Returns the minimum Levenshtein distance.
const Levenshtein = (xs: string, xsLength: number , ys: string, ysLength: number): number => {
    // Base case when dealing with empty strings.
    if(xsLength == 0 && ysLength == 0) {
        return 0;
    } else if (xsLength == 0 && ysLength > 0) {
        return ysLength;
    } else if (xsLength > 0 && ysLength == 0) {
        return xsLength;
    }

    // Return the minimum cost of three result sets:
    // 1. Deleting a character from string 1.
    // 2. Deleting a character from string 2.
    // 3. Deleting a character from both strings.
    // Furthermore at each stage, if the last characters of the string match, 
    // the cost factor is 0. Otherwise the cost factor is 1.
    if(xs[xsLength-1] == ys[ysLength-1]) {
        return lMinimum(
            Levenshtein(xs, xsLength - 1, ys, ysLength) + 1,
            Levenshtein(xs, xsLength, ys, ysLength - 1) + 1,
            Levenshtein(xs, xsLength - 1, ys, ysLength -1) + 0
        );
    } else if(xs[xsLength-1] != ys[ysLength-1]) {
        return lMinimum(
            Levenshtein(xs, xsLength - 1, ys, ysLength) + 1,
            Levenshtein(xs, xsLength, ys, ysLength - 1) + 1,
            Levenshtein(xs, xsLength - 1, ys, ysLength -1) + 1
        );
    }

    // Error has occurred.
    return -1;
};

export default LevenshteinDistance;