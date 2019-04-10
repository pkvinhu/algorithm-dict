// SWAP NODES IN PAIRS

/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, 
only nodes itself may be changed.

Example:
    Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

const ListNode = require('../../utils/js/listNode');

var swapPairs = (head) => {
    // base case: no head or no pair
    if(!head || !head.next) return head;

    // initiate beginning of iteration
    // and set previous to reconnect after every swap
    let current = head;
    let prev = null;
    
    while(current){
        // if first node pair, reset head
        if(current === head){
            head = current.next
        }
        // swap and reconnect if pair exists
        if(current.next){
            if(prev) {
                prev.next = current.next
            }
            swap(current, current.next);
            prev = current
        }
        // iterate to next pair
        // current has switched from nodeA of pair to nodeB of pair
        current = current.next;
    }
    return head
};

// helper function for swapping nodes
const swap = (node1, node2) => {
    let temp = node2.next;
    node2.next = node1;
    node1.next = temp;
}

const test1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

test1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const result = swapPairs(test1);

console.log(result)