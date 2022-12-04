-- Levenshtein.hs
-- Measure the distance between two strings, i.e. the number of 
-- single character edits (insertions, deletions, substitutions) 
-- required to transform one string into the other.

-- Return the minimum of three integers.
lMinimum :: Int -> Int -> Int -> Int
lMinimum x y z 
            | (x <= y) && (x <= z) = x
            | (y <= x) && (y <= z) = y
            | (z <= x) && (z <= y) = z

-- Calculate the Levenshtein distance for two strings.
-- Main entry point.
-- Requires two strings for comparison (xs and ys).
levenshteinDistance :: [Char] -> [Char] -> Int
levenshteinDistance xs ys = levenshtein xs (length(xs)) ys (length(ys))

-- Auxiliary function that does the processing.
-- Takes in string1, string1's length, string2 and string2's length.
-- Returns the minimum Levenshtein distance.
levenshtein :: [Char] -> Int -> [Char] -> Int -> Int

-- Base case when dealing with empty strings.
levenshtein [] _ [] _ = 0
levenshtein _ 0 (y:ys) ly = ly
levenshtein (x:xs) lx _ 0 = lx

-- Return the minimum cost of three result sets:
-- 1. Deleting a character from string 1.
-- 2. Deleting a character from string 2.
-- 3. Deleting a character from both strings.
-- Furthermore at each stage, if the last characters of the string match, 
-- the cost factor is 0. Otherwise the cost factor is 1.
levenshtein (x:xs) lx (y:ys) ly
            | (x:xs)!!(lx - 1) == (y:ys)!!(ly - 1)
                = lMinimum 
                    ((levenshtein (x:xs) (lx - 1) (y:ys) ly) + 1)
                    ((levenshtein (x:xs) lx (y:ys) (ly -1)) + 1)
                    ((levenshtein (x:xs) (lx - 1) (y:ys) (ly - 1)) + 0)
            | (x:xs)!!(lx - 1) /= (y:ys)!!(ly - 1)
                = lMinimum 
                    ((levenshtein (x:xs) (lx - 1) (y:ys) ly) + 1)
                    ((levenshtein (x:xs) lx (y:ys) (ly -1)) + 1)
                    ((levenshtein (x:xs) (lx - 1) (y:ys) (ly - 1)) + 1)
