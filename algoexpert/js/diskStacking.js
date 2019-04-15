// DISK STACKING

/*
You are given a non-empty array of arrays.
Each subarray holds three integers and represents a disk.
These integers denote each disk's width, depth, and height, respectively.
Your goal is to stack up the disks and to maximize 
the total height of the stack. 

A disk must have a strictly smaller width, depth, and height
than any other disk below it. Write a function that returns 
an array of the disks in the final stack, starting with 
the top disk and ending with the bottom disk.
Note that you cannot rotate disks; in other words, 
the integers in each subarray must represent 
[width, depth, height] at all times. 
Assume that there will only be one stack with the greatest total height
*/

// recursive solution
function diskStacking(disks, stack = [], max = []) {
    // base case: if disks has no length, we've inspected every set
    // return accumulated stack
    if(!disks.length) return stack;
    // sort stack according to height so we don't have to compute backwards
    disks = disks.sort((a,b) => b[0]-a[0]);
    // iterate starting at each set
    for(let i = 0; i < disks.length; i++) {
        let cur = disks[i];
        let last = stack[0];
        let recurseStack;
        // if stack is empty, push current set and recurse
        if(!stack.length) {	
            recurseStack = diskStacking(disks.slice(i+1), [disks[i]], max);
        }
        // else we are recursing and sets that have been checked are in our current stack
        // check if the current set of disk dimensions meet our conditions
        // if so, add to stack and recurse
        // if not, skip and recurse
        else {
            if (cur[0] < last[0] && cur[1] < last[1] && cur[2] < last[2]) {
                recurseStack = diskStacking(disks.slice(i+1), [disks[i], ...stack], max);	
            }
            else {
            recurseStack = diskStacking(disks.slice(i+1), stack, max);	
            }
        }
        // if our final stack returned from recursive function 
        // has a greater height than previous max height stack, 
        // max is now the current stack
        if(!max.length || max.reduce((a,c) => { return a+c[2]}, 0) < recurseStack.reduce((a,c) => { return a+c[2]}, 0)) {
            max = recurseStack;	
        }
	}
    // return the final max
	return max;
}

const input1 = [
    [3,3,4], [2,1,2], [3,2,3], 
    [2,2,8], [2,3,4], [5,5,6], 
    [1,2,1], [4,4,5], [1,1,4], 
    [2,2,3]
]
const result = diskStacking(input1);

console.log(result);