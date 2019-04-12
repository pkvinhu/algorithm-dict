// SQUARES OF A SORTED ARRAY

/*
Given an array of integers A sorted in non-decreasing order, 
return an array of the squares of each number, 
also in sorted non-decreasing order.

Example 1:
    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

Example 2:
    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
*/

var sortedSquares = function(A) {
    A = A.sort((a, b) => (a*a)-(b*b));
    return A.map(x => x*x)
};

const input1 = [-4,-1,0,3,10];
const input2 = [-7,-3,2,3,11];
const result = sortedSquares(input2);

console.log(result);