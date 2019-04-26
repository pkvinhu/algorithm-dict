// COMBINATION SUM

/*
Given a set of candidate numbers (candidates) (without duplicates) 
and a target number (target), find all unique combinations 
in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates 
unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
    Input: candidates = [2,3,6,7], target = 7,
    A solution set is:
        [
            [7],
            [2,2,3]
        ]
Example 2:
    Input: candidates = [2,3,5], target = 8,
    A solution set is:
        [
            [2,2,2,2],
            [2,3,3],
            [3,5]
        ]
*/

// RECURSIVE SOLUTION
var combinationSum = function(candidates, target) {
    let sets = [];
    // helper recursive function
    const recurseCandidates = (candidates, set=[], target, memo={})=> {
        // if target is at 0, we've added up to our sum
        if(target===0){
            // check for duplicates in memo
            // before adding to all sets
            // then memoize the added sorted set
            set.sort((a,b) => a-b)
            if(!memo[set]) sets.push(set)
            memo[set] = true
        }
        // only operate on candidates if target is not negative
        // if negative, it means we've exceeded our sum
        if(target > 0){
            for(let i = 0; i < candidates.length; i++){
                // in iteration, recurse with n-1 and n-0 
                // to continue incrementing on current number and check next num
                recurseCandidates(candidates, [...set, candidates[i]], target-candidates[i], memo)
                recurseCandidates(candidates.slice(1), [...set, candidates[i]], target-candidates[i], memo)
            }
        }
    }
    recurseCandidates(candidates, [], target);
    return sets;
};

// BACKTRACKING SOLUTION
var combinationSumBackTracking = function(candidates, target) {
    let sets = [];
    
    const recurseCandidates = (candidates, set=[], target)=> {
        if(target < 0){
            return;
        }
        if(target===0){
            sets.push(set)
        }
        for(let i = 0; i < candidates.length; i++){
            if(candidates[i] > target) continue;
            recurseCandidates(candidates.slice(i), [...set, candidates[i]], target-candidates[i])
        }
    }
    recurseCandidates(candidates, [], target);
    return sets;
};

const result = combinationSumBackTracking([2,3,5], 8);

console.log(result);