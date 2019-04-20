# ITERATIVE IN-ORDER TRAVERSAL

# Write a function that takes in a Binary Tree and 
# traverses it using the in-order traversal technique but without using recursion.
# As the tree is being traversed, a callback function is passed in as 
# an argument to the main function should be called on each node (i.e. callback(currentNode)). 
# Each Binary Tree node has a value stored in a property called 'value,'
# a parent node in a property called 'parent,' 
# and two children nodes stored in properties called 'left' and 'right,' respectively.
# Children nodes can either be Binary Tree nodes themselves or the None (null) value.

class BinaryTree:
    def __init__(self, value, parent=None):
        self.value = value
        self.left = None
        self.right = None
        self.parent = parent

    def insert(self, values, i = 0):
        if i >= len(values):
            return
        queue = [self]
        while len(queue) > 0:
            current = queue.pop(0)
            if current.left is None:
                current.left = BinaryTree(values[i], current)
                break
            queue.append(current.left)
            if current.right is None:
                current.right = BinaryTree(values[i], current)
                break
            queue.append(current.right)
        self.insert(values, i+1)
        return self

testArray = []

def testCallback(tree, testArray=testArray):
    if tree is None:
        return
    testArray.append(tree.value)

test1 = BinaryTree(1)
test2 = BinaryTree(1).insert([2,3,4])
test3 = BinaryTree(1).insert([2,3,4,5,6,7])
test4 = BinaryTree(1).insert([2,3,4,5,6,7,8,9,10])

def iterativeInOrderTraversal(tree, callback):
    stack = []
    while len(stack) is not 0 or tree is not None:
        if tree is not None:
            stack.append(tree)
            tree = tree.left
        else:
            tree = stack.pop()
            callback(tree)
            tree = tree.right

iterativeInOrderTraversal(test4, testCallback)
print(testArray)
