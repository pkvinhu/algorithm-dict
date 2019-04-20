// BINARY SEARCH TREE ITERATOR

/*
Implement an iterator over a binary search tree (BST). 
Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

        7
       / \
      3   15
         /  \
        9    20

Example:
    BSTIterator iterator = new BSTIterator(root);
    iterator.next();    // return 3
    iterator.next();    // return 7
    iterator.hasNext(); // return true
    iterator.next();    // return 9
    iterator.hasNext(); // return true
    iterator.next();    // return 15
    iterator.hasNext(); // return true
    iterator.next();    // return 20
    iterator.hasNext(); // return false
*/

const TreeNode = require('../../utils/js/bstTreeNode');

var BSTIterator = function(root) {
    this.stack = [];
    this.inOrderTraverse(root)
    // this.i = 0
    // this.current = this.stack[this.i]
};

BSTIterator.prototype.inOrderTraverse = function(node) {
    if(node){
        if(node.left){
            this.inOrderTraverse(node.left)
        }
        this.stack.push(node.val)
        if(node.right) {
            this.inOrderTraverse(node.right)
        }
    }
}

BSTIterator.prototype.next = function() {
    // let temp = this.current;
    // this.i+=1;
    // this.current = this.stack[this.i]
    // return temp;
    return this.stack.shift()
};

BSTIterator.prototype.hasNext = function() {
    // return this.i < this.stack.length
    return !!this.stack.length
};

const tree1 = new TreeNode(7)
const tree2 = new TreeNode(3)
const tree3 = new TreeNode(15)
const tree4 = new TreeNode(9)
const tree5 = new TreeNode(20)

tree1.left = tree2
tree1.right = tree3
tree3.left = tree4
tree3.right = tree5

const iterator = new BSTIterator(tree1);
const return3 = iterator.next();    // return 3
const return7 = iterator.next();    // return 7
const result1 = iterator.hasNext(); // return true
const return9 = iterator.next();    // return 9
const result2 = iterator.hasNext(); // return true
const return15 = iterator.next();    // return 15
const result3 = iterator.hasNext(); // return true
const return20 = iterator.next();    // return 20
const result4 = iterator.hasNext(); // return false

console.log(return15, result3, return20, result4)