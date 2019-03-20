// FIND ALL START INDEXES OF AN ANAGRAM

/*
Given a string s and a non-empty string p, 
find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only 
and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

    Example 1:

    Input:
    s: "cbaebabacd" p: "abc"

    Output:
    [0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

var findAnagrams = function(s, p) {
    // if no s length, return empty arr
    if(s.length < p.length) return [];
    const memo = {};
    // create memo
    for(let x = 0; x < p.length; x++){   
        memo[p[x]] ? memo[p[x]]++ : memo[p[x]] = 1
    }        

    // else declare empty set to append start indexes
    const startIndexes = [];
    
    // iterate through from 0 to len(s)-len(p)
    for(let i = 0; i < s.length-(p.length-1); i++){
        const newMemo = {...memo};
        let currentSlice = s.slice(i, i+p.length);
        // check if correct number of each letter appears in corresponding slice
        // by subtracting from memo letter counts
        for(let j = 0; j < currentSlice.length; j++){
            let curr = currentSlice[j]
            if(p.includes(curr)){
                newMemo[curr]--;
            }         
        }    
        // if all values equal 0, we have an anagram!
        let count = Object.values(newMemo).every(each => each === 0)
        if(count) startIndexes.push(i)
    }
    return startIndexes;
};

const result1 = findAnagrams("cbaebabacd", "abc");
const result2 = findAnagrams("abab", "ab");

console.log(result1);