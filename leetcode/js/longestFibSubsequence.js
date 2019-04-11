// LENGTH OF LONGEST FIBONACCI SUBSEQUENCE

/*
A sequence X_1, X_2, ..., X_n is fibonacci-like if:

n >= 3
X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
Given a strictly increasing array A of positive integers forming a sequence, 
find the length of the longest fibonacci-like subsequence of A.  
If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A 
by deleting any number of elements (including none) from A, 
without changing the order of the remaining elements.  
For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)

 

Example 1:
    Input: [1,2,3,4,5,6,7,8]
    Output: 5
    Explanation:
    The longest subsequence that is fibonacci-like: [1,2,3,5,8].
Example 2:
    Input: [1,3,7,11,12,14,18]
    Output: 3
    Explanation:
    The longest subsequence that is fibonacci-like:
    [1,11,12], [3,11,14] or [7,11,18].
*/

var lenLongestFibSubseq = function(A) {
    // set initial max because we'll always need two nums 
    // to find next number of sequence
    let maxCount = 2;
    // remove duplicates but create set for easier lookups
    let set = new Set(A);
    
    // always need two pointers i and j to start
    for(let i = 0; i < A.length; i++){
        for(let j = i+1; j < A.length; j++){
            let num1 = A[i];
            let num2 = A[j];
            let len = 2;
            // each next number will be in our set if it exists - increase len if exists
            // if not, loop continues and we will not have to check other numbers
            while(set.has(num1+num2)){
                let total = num1+num2
                num1 = num2
                num2 = total
                len++;
            }
            // new max set if current subsequence max is greater to current max
            maxCount = Math.max(maxCount, len)
        }
    }
    // if max is 2, we know we do not have a fib sequence
    return maxCount > 2 ? maxCount : 0;
};

const input1 = [1,2,3,4,5,6,7,8];
const input2 = [1,3,7,11,12,14,18];
const result = lenLongestFibSubseq(input2);

console.log(result);