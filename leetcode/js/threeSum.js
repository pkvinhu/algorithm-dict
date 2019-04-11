// THREE SUM

/*
Given an array nums of n integers, 
are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
*/

var threeSum = function(nums) {
    // initiate sets to store all num sets that add to 0
    let sets = [];
    // sort so we can use pointers
    nums = nums.sort((a,b) => a-b)
    // loop nums to len-2 because we'll always have two pointers following num at i
    for(let i = 0; i < nums.length-2; i++){
        // since nums is sorted, if the first num (at i) is greater than 0, 
        // we know it cannot add to 0 so we break out of loop
        if(nums[i] > 0) break;
        // to remove duplicates, anytime we see the same starting number, 
        // we'll skip it because we know we've already gotten those results
        if(i > 0 && nums[i] === nums[i-1]) continue;
        // initiate pointers for nums 2 and 3 
        // and constantly move the needles closer to each other like we would in twoSum
        let p1 = i+1;
        let p2 = nums.length-1;
        while(p1 < p2) {
            let total = nums[i] + nums[p1] + nums[p2];
            if(total === 0) {
                sets.push([nums[i], nums[p1], nums[p2]])
                p1++;
                p2--;
                // if we see a duplicate after increment, 
                // we'll skip because we know we've already gotten those results
                while(nums[p1] === nums[p1-1]) p1++;
                while(nums[p2] === nums[p2+1]) p2--;
            }
            else if (total > 0) p2--;
            else p1++;
        }
    }
    return sets;
};

const input1 = [-1, 0, 1, 2, -1, -4];
const input2 = [54, 56, 34, 22, -34, -2, -5, -8, -60, -14, -15, -16, -17, -19, 0];
const result = threeSum(input1);

console.log(result);