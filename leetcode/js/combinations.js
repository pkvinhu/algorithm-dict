// COMBINATIONS

/*
Given two integers n and k, 
return all possible combinations of k numbers out of 1 ... n.

Example:
    Input: n = 4, k = 2
    Output:
        [
            [2,4],
            [3,4],
            [2,3],
            [1,2],
            [1,3],
            [1,4],
        ]
*/

var combine = function(n, k) {
    let sets = [];
    
    // helper recursive function to get all combos
    const getCombos = (currN, k, set = []) => {
        // if k is 0, we've hit k length in current combo set
        if(k === 0) {
            sets.push(set)
        }
        // we will initiate currentN at 1 and slice off the front
        // as we recurse to communicate that it has already been checked
        // and we will not check backwards because [1,2] and [2,1] is the
        // same combo and we only want unique combos
        // on each recursion, we increment beginning, subtract k len, 
        // and add currentN to the current combo set until k len
        else if(currN <= n) {
            for(let i = currN; i <= n; i++){
                getCombos(i+1, k-1, [...set, i])
            }
        }
    }
    getCombos(1, k);
    return sets;
};

const result = combine(4, 2);

console.log(result);