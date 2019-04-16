// VALIDATE BINARY SEARCH TREE

/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    Input:
        2
       / \
      1   3
    Output: true
Example 2:
        5
       / \
      1   4
     / \
    3   6
    Output: false
    Explanation: The input is: [5,1,4,null,null,3,6]. 
                 The root node's value
                 is 5 but its right child's value is 4.
*/

const TreeNode = require('../../utils/js/bstTreeNode');

var isValidBST = function(root) {
    if(!root) {
        return true;
    }
    
    // helper function to take depth first look into bst
    const recurse = (root, max, min) => {
        // first condition: if max value exists then we are iterating left 
        // to search for decreasing values
        // so the current value has to be less than max or we return false
        
        // second condition: if min exists than we are iterating right
        // to search for increasing values - return false is root val is greater
        if(max !== null && root.val >= max) return false
        if(min !== null && root.val <= min) return false
        
        // we do not want to iterate right if left is already not valid
        // so check left first with root value being the max and null being min
        // if there are no more left nodes, we stop searching deeper, left = true
        let left = root.left ? recurse(root.left, root.val, min) : true
        
        // if left, we iterate right, establishing the min value 
        // and return final check of right      
        if(left){
            let right = root.right ? recurse(root.right, max, root.val) : true;
            return right
        }
        // else left presented us with invalid tree, so we return false
        else return false
    }
    
    // return the result of recursive call
    return recurse(root, null, null)
};

const tree1 = new TreeNode(5)
const tree2 = new TreeNode(1)
const tree3 = new TreeNode(3)
const tree4 = new TreeNode(6)
const tree5 = new TreeNode(4)

tree1.left = tree2
tree1.right = tree5
tree2.left = tree3
tree2.right = tree4

const result = isValidBST(tree1);

console.log(result);