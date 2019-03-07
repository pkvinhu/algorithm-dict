// PERMUTATIONS OF A STRING

/*
Given a collection of distinct integers, return all possible permutations.

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(nums, curr=[], allPossibilities=[]) {
    // base case: if slice of nums passed in is empty, 
    // we have iterated through all possibilities of permutations 
    // of an individual char, so push current set into all possibilities set
    // current "stack" of event loop is finished
    if (!nums.length) {
        allPossibilities.push(curr);
        return;
    }
    
    // map through the list of nums, isolating each char at i, 
    // and recursively slicing until all permutations have been checked
    nums.map((each, i) => {
        permute(nums.slice(0, i).concat(nums.slice(i+1)), curr.concat(each), allPossibilities);
    })
    
return allPossibilities;
};

const nums = [1,2,3];
const result = permute(nums);
console.log(result);