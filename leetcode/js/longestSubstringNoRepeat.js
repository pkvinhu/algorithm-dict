// LONGEST SUBSTRING WITH NO REPEAT CHARACTERS

/* 
Given a string, find the length of the longest substring 
without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    // no len ? return 0
    if(!s.length) return 0;
    // initiate current longest as len of one char
    let longest = 1;
    
    for (let i = 0; i < s.length; i++){
        // i == pointer1, j == pointer2
        // get current slice and increment j as long as all chars are unique
        let j = i+1;
        let current = s.slice(i, j);
        let includes = includesChar(current, s[j]);
        while(j<s.length && !includes){
            current+=s[j]
            // longest == max len between current iteration and current max
            longest = Math.max(current.length, longest)
            j++;
            // after incrementing j, check if new j is in string
            includes = includesChar(current, s[j])
        }
    }
    return longest;
};

function includesChar(string, charToCheck){
  return string.includes(charToCheck)
}

const str1 = "abcabcbb"
const str2 = "bbbbb"
const str3 = "pwwkew"

const test1 = lengthOfLongestSubstring(str2)
console.log(test1)