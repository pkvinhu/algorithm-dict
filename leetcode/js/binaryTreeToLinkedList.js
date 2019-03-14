// FLATTEN BINARY TREE TO LINKED LIST

/*
    Given a binary tree, flatten it to a linked list in-place.

    For example, given the following tree:

        1
       / \
      2   5
     / \   \
    3   4   6
    The flattened tree should look like:

    1
     \
      2
       \
        3
         \
          4
           \
            5
             \
              6
*/

const TreeNode = require('../../utils/js/bstTreeNode');

var flatten = function(root) {
    if (!root) { return; }
    let head = root;
    let left = root.left;
    let right = root.right;

    flatten(left);
    flatten(right);

    root.left = null;
    root.right = left;
    let cur = root;
    while (cur.right !== null) { cur = cur.right; }
    cur.right = right;
    return head;
};

const tree1 = new TreeNode(1)
const tree2 = new TreeNode(2)
const tree3 = new TreeNode(3)
const tree4 = new TreeNode(4)
const tree5 = new TreeNode(5)
const tree6 = new TreeNode(6)

tree1.left = tree2
tree1.right = tree5
tree2.left = tree3
tree2.right = tree4
tree5.right = tree6

const result = flatten(tree1)
console.log(result);


