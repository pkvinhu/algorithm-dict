// LONGEST PALINDROMIC SUBSTRING

/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:
    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

Example 2:
    Input: "cbbd"
    Output: "bb"
*/

var longestPalindrome = function(s) {
    // base case: if string has 1 or less letters
    if(s.length < 2) return s;
    // initiate a start and end index for current longest palindrome
    let start = 0;
    let end = 0;
    
    // loop through to expand from middle of each letter in string
    for(let i = 0; i < s.length; i++){
        // for each letter, expansion has to happen for both even and odd lengths
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i+1);
        // longer pal between even and odd is longest of this iteration
        let len = Math.max(len1, len2);
        // if longest of this iteration is longer than current longest
        // compute for new start and end
        if(len > end-start) {
            start = i - (len-2)/2
            end = i + len/2
        }
    }
    // return substring
    return s.slice(start, end+1)
};

const expandFromMiddle = (word, left, right) => {
    // left pointer will iterate right and right pointer from right
    // but both begin in middle
    let L = left;
    let R = right;
    // if we're not at the end of string on each pointer
    // and we still have a palindrome, continue
    // else return the length of length of last valid palindrome
    while(L >= 0 && R < word.length && word[L] == word[R]){
        L--;
        R++;
    }
    return R-L-1;
}

const input1 = "babad";
const input2 = "cbbd";
const result = longestPalindrome(input2);

console.log(result);