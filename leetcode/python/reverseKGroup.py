## REVERSE NODES IN K-GROUP

# Given a linked list, reverse the nodes 
# of a linked list k at a time and return its modified list.

# k is a positive integer and is less than or equal to 
# the length of the linked list. 
# If the number of nodes is not a multiple of k 
# then left-out nodes in the end should remain as it is.

class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

# class Solution(object):
def reverseKGroup(head, k):
    """
    :type head: ListNode
    :type k: int
    """
    
    # if k group is 1, reversed == not reversed, return
    if k == 1:
        return head
    
    # helper function to reverse and link the k-group segment 
    def reverseAndReattach(x):
        x.reverse()
        for i, node in enumerate(x):
            if i < len(x)-1:
                node.next = x[i+1]
        return x
    
    # initiate a queue as list to be operated on once len k is reached
    # current as the loop's beginning
    # currentLast as the last node of the last reversed segment to attach to the head of the next segment
    queue = []
    current = head
    currentLast = head
    
    while current:
        # append node to waiting queue first and increment
        queue.append(current)
        current = current.next

        # if len queue is num of k, call helper function 
        if len(queue) == k:
            newQueue = reverseAndReattach(queue)

            #reattach lastSegment[end] with current[start]
            if currentLast != head:
                currentLast.next = newQueue[0]
            else:
                head = newQueue[0]

            # how to edit currentLast depending on if we are looking at the first segment
            # increment current, then delete clear queue
            currentLast = newQueue[len(newQueue)-1]
            newQueue[len(newQueue)-1].next = current
            del queue[:]
        
    return head


test1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)
test1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

print(reverseKGroup(test1, 2))




