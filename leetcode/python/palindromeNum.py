## PALINDROME NUMBER

# Determine whether an integer is a palindrome. 
# An integer is a palindrome when it reads the same backward as forward.

def isPalindrome(x: 'int') -> 'bool':
        toStr = str(x)
        p1 = 0
        p2 = len(toStr)-1
        while p1<=p2:
            if toStr[p1] != toStr[p2]:
                return False
            p1+=1
            p2-=1
        return True

num1 = 23432 # True
num2 = 22245 # False
result = isPalindrome(num1)
print(result)