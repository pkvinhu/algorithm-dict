# BinaryTree class

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