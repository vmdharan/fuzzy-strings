-- Hamming.hs
-- Determine the Hamming distance for two given strings.

-- Throw an error if the two strings are different lengths.
eListError :: a
eListError = error "Error: lists are not the same length"

-- Return 0 if characters match, otherwise return 1.
hammingCompare :: Char -> Char -> Int
hammingCompare x y 
                | x == y = 0
                | x /= y = 1

-- Process the Hamming distance of two input strings.
hamming :: [Char] -> [Char] -> Int
hamming [] [] = 0
hamming [] ys = eListError
hamming xs [] = eListError
hamming (x:xs) (y:ys) = (hammingCompare x y) + (hamming xs ys)
