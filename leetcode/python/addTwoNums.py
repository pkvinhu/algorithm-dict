## ADD TWO NUMBERS

# You are given two non-empty linked lists 
# representing two non-negative integers. 
# The digits are stored in reverse order 
# and each of their nodes contain a single digit. 
# Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, 
# except the number 0 itself.

class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

def addTwoNumbers(l1, l2):
    """
    :type l1: ListNode
    :type l2: ListNode
    :rtype: ListNode
    """

    # container to hold single digit addition values 
    # keep track of carry over values
    addedVals = []
    carry = 0
    
    # if current increment of nodeList1 or nodeList2 is not None, continue
    while l1 or l2:
        # reinitialize carry-over value but throw it into 'hold' for calc usage 
        hold = carry
        carry = 0

        # if two nodes exist (if they continue to be same len)
        # calculate total, check for carry-over, and if num is 10 or over
        # then increment both nodes
        if l1 and l2:
            calc = l1.val + l2.val + hold
            if calc > 9:
                carry = 1
                calc = calc-10
            addedVals.append(ListNode(calc))
            l1 = l1.next
            l2 = l2.next
        # same logic as previous for extra node in nodeList1
        elif l1:
            calc = l1.val + hold
            if calc > 9:
                carry = 1
                calc = calc-10
            addedVals.append(ListNode(calc))
            l1 = l1.next
        # same logic as previous for extra node in nodeList2
        elif l2:
            calc = l2.val + hold
            if calc > 9:
                carry = 1
                calc = calc-10
            addedVals.append(ListNode(calc))
            l2 = l2.next
    
    # if carry-over exists at the end of iteration, add 1 to list
    if carry:
        addedVals.append(ListNode(carry))
            
    head = addedVals[0]
    current = head
    
    # loop through all addedVals and recreate the linked list of totals
    for i, node in enumerate(addedVals):
        if i > 0:
            current.next = node
            current = node
    
    return head

list1Head= ListNode(2)
node2 = ListNode(4)
node3 = ListNode(3)

list2Head = ListNode(5)
node5 = ListNode(6)
node6 = ListNode(4)

list1Head.next = node2
node2.next = node3
list2Head.next = node5
node5.next = node6

resultList = addTwoNumbers(list1Head, list2Head)

print(resultList)