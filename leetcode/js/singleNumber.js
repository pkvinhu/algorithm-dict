// FIND NON-PAIRED NUMBER IN SET

/*

Given a non-empty array of integers, 
every element appears twice except for one. 
Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

    Example 1:

    Input: [2,2,1]
    Output: 1

*/

var singleNumber = function(nums) {
/*
FIRST SOLUTION
RUNS MUCH FASTER, BUT DOES NOT USE CONSTANT MEMORY

    let memo = {};
    for(let num of nums){
        memo[num] ? delete memo[num] : memo[num] = 1;
    }
    return Object.entries(memo)[0][0]
*/

// SECOND SOLUTION
// does not take up any extra memory
// sorts number set first and returns whatever number
// does not have a consecutive identical number
    nums.sort();
    for(let i = 0; i < nums.length; i+=2){
        if(nums[i] !== nums[i+1]) return nums[i]
    }
};

const set = [2,2,1];
const result = singleNumber(set);
console.log(result);

