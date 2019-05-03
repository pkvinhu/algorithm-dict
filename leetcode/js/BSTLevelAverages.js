// LEVEL AVERAGES IN BINARY SEARCH TREE

/*
Given a non-empty binary tree, return the average value 
of the nodes on each level in the form of an array.

Example 1:
    Input:
        3
       / \
      9  20
        /  \
       15   7
    Output: [3, 14.5, 11]
    Explanation:
    The average value of nodes on level 0 is 3,  
    on level 1 is 14.5, and on level 2 is 11. 
    Hence return [3, 14.5, 11].

Note:
The range of node's value is in the range of 32-bit signed integer.
*/

const TreeNode = require('../../utils/js/bstTreeNode');

var averageOfLevels = function(root) {
    // base case: no root = no averages
    if(!root) return [];
    // level averages will be container for result averages
    // queue will be used as our iterator through each level
    // cur will be used as we shift each val off the front of queue
    let levelAverages = [];
    let queue = [root];
    let cur;
    while(queue.length){
        // save initial length because loop will constantly add to the end of the queue
        // and we only want to loop over the initial numbers representing current level
        // keep a total and a count of numbers check
        let len = queue.length;
        let count = 0;
        let total = 0;
        for(let i = 0; i < len; i++){
            cur = queue.shift()
            total += cur.val;
            count++;
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
        }
        // divide total by count and push result to the averages container
        levelAverages.push(total/count);
        count = 0;
        total = 0;
    }
    return levelAverages;
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

const result = averageOfLevels(tree1);

console.log(result);