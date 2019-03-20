// POPULATING NEXT RIGHT POINTERS IN EACH NODE

/*
You are given a perfect binary tree where all leaves are on the same level, 
and every parent has two children. 
The binary tree has the following definition:

    struct Node {
        int val;
        Node *left;
        Node *right;
        Node *next;
    }
Populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = null;
};

var connect = function(root) {
    // base case: if root is empty
    if(!root) return null;
    let queue = [root];
    
    // queue keeps track of if we've iterated through all bst nodes
    // while we haven't, operate on them
    while(queue.length){
        // new queue will store next level of nodes in order, left to right
        const newQueue = [];

        // on each node, we ask if it isn't at the rightmost edge
        // next node.next is at the next index of queue
        // then push next-level nodes from left to right nodes
        for(let i = 0; i < queue.length; i++){
            if(i !== queue.length-1){
                queue[i].next = queue[i+1]
            }
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
    return root;
};

const node7 = new Node(7, null, null);
const node6 = new Node(6, null, null);
const node5 = new Node(5, null, null);
const node4 = new Node(4, null, null);
const node3 = new Node(3, node6, node7);
const node2 = new Node(2, node4, node5);
const root = new Node(1, node2, node3);

const result = connect(root);
console.log(result);