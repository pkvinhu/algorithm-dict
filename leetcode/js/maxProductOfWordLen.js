// MAXIMUM PRODUCT OF WORD LENGTHS

/*

Given a string array words, 
find the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. 
You may assume that each word will contain only lower case letters. 
If no such two words exist, return 0.

    Example 1:

    Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
    Output: 16 
    Explanation: The two words can be "abcw", "xtfn".
*/

var maxProduct = function(words) {
    // base case: no words in set
    if(!words.length) return 0;
    // keep track of max product
    let maxProduct = 0;
    // loop over comparing each word to every other word
    for(let i = 0; i < words.length-1; i++){
        for(let j = i+1; j < words.length; j++){
            // if it does cross, check for max product
            if(!doesShare(words[i], words[j])){
                maxProduct = Math.max(words[i].length * words[j].length, maxProduct);
            }
        }
    }
    return maxProduct;
};

// helper function to check if any cross-over letters exist
const doesShare = (word1, word2) => {
    for(let i = 0; i < word1.length; i++){
        if(word2.includes(word1[i])){
            return true;   
        }
    }
    return false;
}

const set1 = ["abcw","baz","foo","bar","xtfn","abcdef"]; // len(abcw) * len(xtfn) = 16
const set2 = ["a","ab","abc","d","cd","bcd","abcd"]; // len(ab) * len(cd) = 4
const set3 = ["a","aa","aaa","aaaa"]; // = 0
const result = maxProduct(set1);
console.log(result);