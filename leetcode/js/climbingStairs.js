// CLIMBING STAIRS

/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

    Input: 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Input: 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
*/

var climbStairs = function(n, memo = {}) {
    if(n===0){
        return 1
    }
    if(n < 0) {
        return 0
    }
    if(memo[n]) return memo[n]
    
    else {
        memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
        return memo[n]
    }
};

const result = climbStairs(2)
const result2 = climbStairs(3)

console.log(result2)