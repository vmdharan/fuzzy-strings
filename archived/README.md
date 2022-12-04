# Fuzzy-strings
Approximate string matching algorithms.

####Hamming distance
This is the number of character positions between two input strings that are different. Alternatively, it can be viewed as the number of substitutions required to transform one string into the other.

######Usage:

*hamming "elhlo rwold" "hello world"*

__6__


####Levenshtein distance
Measure the distance between two strings, i.e. the number of single character edits (insertions, deletions, substitutions) required to transform one string into the other.

######Usage:

*levenshteinDistance "helloworld" "elhlorwold"*

__4__
