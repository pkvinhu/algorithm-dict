// GROUP ANAGRAMS

/*
Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
*/

var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    let memo = {};
    for( let str of strs){
        isAnagram(str, memo);
    }
    return Object.values(memo);
};

let isAnagram = (str, cache) => {
    let check = str.split('').sort().join('') 
    if(cache[check]){
        cache[check].push(str)
    }
    else {
        cache[check] = [str]
    }
}

const set = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(set);
console.log(result);