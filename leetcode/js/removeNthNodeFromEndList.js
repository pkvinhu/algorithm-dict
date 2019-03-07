// REMOVE NTH NODE FROM END OF A LIST

/*
Given a linked list, remove the n-th node from the end of list and return its head.

Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
*/

const ListNode = require('../../utils/js/listNode');

var removeNthFromEnd = function(head, n) {
    // if only one node, return null if n is 1, else return node
    if(!head.next) {
       if(n === 1){
           head = null;
       }  
        return head;
    } 

    // initiate first node as current and a counter
    let current = head;
    let count = 0;

    // loop through once to get overall num of nodes count
    while(current.next){
        current = current.next
        count++;
    }

    // initiate count from beginning by subtracting n from total num of nodes
    let newCount = count-n;

    // if n exceeds the count of total nodes, assuming that n is always valid
    // the first node must be removed
    if(newCount < 0) {
        head = head.next;
        return head;
    }

    // else, iterate through linked list until removal and reattach
    let newCurrent = head;
    while(newCount){
        newCurrent = newCurrent.next;
        newCount-=1;
    }
    newCurrent.next = newCurrent.next.next;
    
    return head;
};

const test1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

test1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const result = removeNthFromEnd(test1, 2);
console.log(result)