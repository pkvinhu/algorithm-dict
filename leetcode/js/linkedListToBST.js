// LINKED LIST TO BST

/*
Given a singly linked list where elements are sorted in ascending order, 
convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined 
as a binary tree in which the depth of the two subtrees of every node 
never differ by more than 1.

Example:
    Given the sorted linked list: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], 
    which represents the following height balanced BST:

        0
       / \
     -3   9
     /   /
   -10  5
*/

const ListNode = require('../../utils/js/listNode');

var sortedListToBST = function(head) {
    //     iterate through, save the count
    //     iterate through from beginning and snag the middle as the root
    //     and reverse the linking to -10 <- -3 <- 0 <- 5 <- 9
    //     then traverse tree from root to set values recursively

    //     OR BRUTE FORCE COULD BE CONVERTING LINKED LIST TO ARRAY
    //     sort array
    //     then convert to BST
        if(!head){
            return null
        }
        const arr = [];
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
        arr.sort((a,b) => a-b);
        
        return build(0, arr.length);
        
        function build(start, length){
            let leftL = Math.floor((length)/2), head = new TreeNode(arr[start+leftL]);
            if (leftL>0) head.left = build(start, leftL);
            if (leftL+1<length) head.right = build(start+leftL+1, length-leftL-1);
            return head;
        }
        
    };

const test1 = new ListNode(-10);
const node2 = new ListNode(-3);
const node3 = new ListNode(0);
const node4 = new ListNode(5);
const node5 = new ListNode(9);

test1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const result = sortedListToBST(test1);
console.log(result)