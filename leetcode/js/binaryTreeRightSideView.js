// BINARY TREE RIGHT SIDE VIEW

/*
Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example:

    Input: [1,2,3,null,5,null,4]
    Output: [1, 3, 4]
    Explanation:

    1            <---
    /   \
    2     3         <---
    \     \
    5     4       <---
*/

const TreeNode = require('../../utils/js/bstTreeNode')

var rightSideView = function(root) {
    // base case: if root is empty, return empty array
    if(!root) return [];
    // otherwise, push nodes into queue and compute each level
    // pushing rightmost node values into set on each level
    const rightSide = [];
    let queue = [root]
    while(queue.length){
        const newQueue = [];
        rightSide.push(queue[queue.length-1].val)
        for(let i = 0; i < queue.length; i++){
            if(queue[i].left){
                newQueue.push(queue[i].left)
            }
            if(queue[i].right){
                newQueue.push(queue[i].right)
            }
        }
        // reassign next level's nodes to be worked on in next iteration
        queue = newQueue;
    }
    return rightSide; 
};

const node7 = new TreeNode(7);
const node6 = new TreeNode(6);
const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2);
const root = new TreeNode(1);

root.left = node2, root.right = node3;
node2.left = node4, node2.right = node5;
node3.left = node6, node3.right = node7;

const result = rightSideView(root);
console.log(result);