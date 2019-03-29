// LONGEST CONSECUTIVE SEQUENCE

/*


*/

var longestConsecutive = function(nums) {
    // base case: len(nums) less than 1
    if(nums.length <= 1) return nums.length;
    // sort set
    nums = nums.sort((a,b) => a-b);
    // initiate the overall longest and constantly compare against current
    let longest = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        // loop through and check if num is previous num+1
        // add to current streak if so
        // else reinitiate current streak
        if(i === 0 || nums[i] !== nums[i-1]+1){
            if(nums[i] !== nums[i-1]) current = 1
        }
        else {
            current++
        }
        // at the end of each loop check against longest
        longest = Math.max(longest, current)
    }
    return longest;

// SOLUTION TWO:
// hash the vals into a set and constantly check if consecutive num is in set

    /*
    let set = new Set(nums);
    for(let num of set){
        if(!set.has(num-1)){
            let current = num;
            let streak = 1;
            while(set.has(current+1)){
                current++;
                streak++;
            }
            longest = Math.max(longest, streak)
        }
    }
    return longest
    */
};

const set1 = [100, 4, 200, 1, 3, 2];
const set2 = [5, 10, 6, 7, 11, 8, 12, 13, 14, 100, 101, 200];
const result = longestConsecutive(set2);

console.log(result);