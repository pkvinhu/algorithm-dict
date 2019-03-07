## TWO SUM

# Given an array of integers, return indices of the two numbers 
# such that they add up to a specific target.

# You may assume that each input would have exactly one solution, 
# and you may not use the same element twice.

def twoSum(nums, target):    
    # hash map to log initial indexes    
    hash = {}

    # loop, if number is a double, check if n+n equals target
    for i, x in enumerate(nums):
        if x not in hash.keys():
            hash[x] = i
        else:
            if x + x == target:
                return [hash[x], i]
    
    # sort numbers, declare start and end pointers
    nums.sort()
    p1 = 0
    p2 = len(nums)-1
    
    # loop through and increment pointers until pointers reach mid or target total num is found
    while p1 < p2:
        total = nums[p1]+nums[p2]
        if total == target:
            return [hash[nums[p1]], hash[nums[p2]]]
        elif total > target:
            p2 -= 1
        elif total < target:
            p1 += 1
    
    # else return empty list
    return []

test1 = twoSum([1,3,4,10,11,15], 21)
print(test1)