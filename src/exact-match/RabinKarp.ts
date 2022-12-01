// Rabin-Karp algorithm for string matching.

const charsInInput = 256;
const optimus = 127;

const RabinKarpStringMatch = (sourceText: string, pattern: string): number => {
    // Hash values
    let patternHash = 0;
    let sourceTextHash = 0;
    let hash = 1;

    for(let i=0; i<pattern.length-1; i++) {
        // Calculate hashes.
        hash = (hash * charsInInput) % optimus;
    }

    for(let j=0; j<pattern.length; j++) {
        // Calculate hashes for text and pattern.
        patternHash = (charsInInput * patternHash + pattern[j].charCodeAt(0)) % optimus;
        sourceTextHash = (charsInInput * sourceTextHash + sourceText[j].charCodeAt(0)) % optimus;
    }

    let k = 0;
    for(k = 0; k <= (sourceText.length - pattern.length); k++) {
        if(patternHash == sourceTextHash) {
            let l = 0;
            for(l = 0; l < pattern.length; l++) {
                if(sourceText[k + l] != pattern[l]) {
                    break;
                }
            }

            if(l == pattern.length) {
                return k;
            }
        }

        if(k < (sourceText.length - pattern.length)) {
            sourceTextHash = (charsInInput * (sourceTextHash - sourceText[k].charCodeAt(0) * hash) + sourceText[k + pattern.length].charCodeAt(0)) % optimus;
            if(sourceTextHash < 0) {
                sourceTextHash = (sourceTextHash + optimus);
            }
        }
    }

    return -1;
};

export default RabinKarpStringMatch;