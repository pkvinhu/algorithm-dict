// PALINDROMIC SUBSTRINGs

/*
Given a string, your task is to count 
how many palindromic substrings in this string.

The substrings with different start indexes 
or end indexes are counted as different substrings 
even they consist of same characters.

Example 1:
    Input: "abc"
    Output: 3
    Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
    Input: "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

var countSubstrings = function(s) {
    // each single letter will be its own palindrome
    let count = s.length;
    
    // start looking at 2-letter sets in loop
    for(let i = 0; i < s.length; i++) {
        let len = 2;

        // only search sets if the len does not exceed length of string
        while(i+len <= s.length){
            // if palindrome, increment count and string len
            // else only increment string len
            if(isPalindrome(s.slice(i, i+len))){
                count++;
                len++;
            }
            else {
                len++;
            }
        }
    }
    return count;
};

const isPalindrome = (word) => {
    let p1 = 0;
    let p2 = word.length-1;
    while(p1 <= p2) {
        if(word[p1] === word[p2]) {
            p1++;
            p2--;
        }
        else return false;
    }
    return true;
}

const input1 = "abc";
const input2 = "aaa";
const result = countSubstrings(input1);

console.log(result);