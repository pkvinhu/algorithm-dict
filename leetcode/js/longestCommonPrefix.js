// LONGEST COMMON PREFIX

/*
Write a function to find the longest common prefix string 
amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
    // return if no len
    if(!strs.length) return '';

    let prefix = '';

    // looping through indexes of the first word
    for(let i = 0; i < strs[0].length; i++){
        // if letter at current index is the same across every word, add to prefix
        // else break out of loop
        let test = strs.slice(1).reduce((acc, curr) =>{
            if(curr[i] === strs[0][i] && acc === true){
                return true;
            } else {
                return false;
            }
        }, true) 
        if(test){
            prefix+=strs[0][i]
        }
        if(!test){
            break;
        }
    }
    return prefix;
 };

const arr1 = ["flower","flow","flight"]
const arr2 = ["dog","racecar","car"]
const result = longestCommonPrefix(arr1)
console.log(result)