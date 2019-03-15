// LETTER COMBINATIONS OF A PHONE NUMBER

/*
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) 
is given below. Note that 1 does not map to any letters.
*/

const lettersByNumbersMemo = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    // if no digits, return empty arr
    if(!digits.toString().length) return [];
    return permuteDigits(digits);
    
    // recursive function to get all permutations
    function permuteDigits(digits, result = []){
        // transform number to string for iterable set
        digits = digits.toString();
        
        // grab the first digit to isolate
        let current = lettersByNumbersMemo[digits[0]];
        
        // initiate new result set by looping over all letters over recursively return sets 
        // and concating to permutation cumulatively
        let newResult = [];
        for(let i = 0; i < current.length; i++){
            // if there are still digits, slice off what we already worked with and recurse
            let permutation = letterCombinations(digits.slice(1), result);
            // if previous permutations, loop over and add current letter to
            if(permutation.length) {
                permutation.forEach(pm => {
                    newResult.push(current[i]+pm)
                })
            } 
            // else and current letter
            else if (!permutation.length){
                newResult.push(current[i])
            }
        }
        return newResult
    }
};

const result1 = letterCombinations(234);
const result2 = letterCombinations(7432);
console.log(result1);