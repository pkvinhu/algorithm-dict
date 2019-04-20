// NUMBER OF BINARY TREE TOPOLOGIES

/*
Write a function that takes in a non-negative integer n 
and that returns the number of possible Binary Tree topologies
that can be created with exactly n nodes. 
A Binary Tree topology is defined as any Binary Tree configuration,
irrespective of node values. For instance, 
there exist only two Binary Tree topologies when n is equal to 2:
a root node with a left node, and a root node with a right node.
Node that when n is equal to 0, 
there is one topology that can be created: the None(null) node.
*/

function numberOfBinaryTreeTopologies(n, memo = {}) {
    // base case: if n is 0, return 1 topology
    if(n===0) return 1
    // compute total recursively by halving n to binary 
    // and checking amount of every topology
    let total = 0;
	for(let i = 0; i < n; i++){
        let right = n-1-i;
        // cache topology amounts for faster lookup times
		if(!memo[i]) memo[i] = numberOfBinaryTreeTopologies(i);
		if(!memo[right]) memo[right] = numberOfBinaryTreeTopologies(right);
		total += memo[i]*memo[right]
	}
	return total;
}

const result1 = numberOfBinaryTreeTopologies(3) // 5
const result2 = numberOfBinaryTreeTopologies(10) // 16796

console.log(result2)
