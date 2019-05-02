// BINARY TREE ZIGZAG LEVEL ORDER TRAVERSAL

/*
Given a binary tree, return the zigzag level order traversal 
of its nodes' values. (ie, from left to right, then right to left 
for the next level and alternate between).

For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
    return its zigzag level order traversal as:
        [
            [3],
            [20,9],
            [15,7]
        ]
*/

const TreeNode = require('../../utils/js/bstTreeNode');

var zigzagLevelOrder = function(root) {
    // base case: no root, return empty set
    if(!root) return []
    // initiate empty array to hold all levels sets
    // and queue to iterate through each level
    // and r to determine direction to check nodes per level
    let sets = [];
    let queue = [root];
    let r = false;
    while(queue.length){
        // initiate empty set to push node values and initial length to check
        // because we'll be pushing next level nodes into queue before checking nodes to push
        let set = [];
        let len = queue.length
        // push nodes of next level from left to right
        for(let i = 0; i < len; i++){
            if(queue[i].left) queue.push(queue[i].left)
            if(queue[i].right) queue.push(queue[i].right)
        }
        // if we are going left, we will iterate from beginning to end of len
        if(!r) {
            for(let i = 0; i < len; i++){
                set.push(queue[i].val)
            }
        } 
        // if we are going right, we will iterate from end to beginning of len
        else if (r) {
            for(let i = len-1; i >= 0; i--){
                set.push(queue[i].val)
            }
        }
        // push final set, slice out nodes already checked, 
        // and flip direction for next level iteration
        sets.push(set)
        queue = queue.slice(len)
        r = !r
    }
    return sets;
};

const tree1 = new TreeNode(3)
const tree2 = new TreeNode(9)
const tree3 = new TreeNode(15)
const tree4 = new TreeNode(7)
const tree5 = new TreeNode(20)

tree1.left = tree2
tree1.right = tree5
tree5.left = tree3
tree5.right = tree4

const result = zigzagLevelOrder(tree1);

console.log(result); // [[3], [20, 9], [15, 7]]
