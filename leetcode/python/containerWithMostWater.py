## CONTAINER WITH MOST WATER

# Given n non-negative integers a1, a2, ..., an , 
# where each represents a point at coordinate (i, ai). 
# n vertical lines are drawn such that the two endpoints 
# of line i is at (i, ai) and (i, 0). 
# Find two lines, which together with x-axis forms a container, 
# such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.

def maxArea(height: 'List[int]') -> 'int':
        
        # greatest area so far is initiated to 0
        # create pointers to continually get areas for len(slice) * shorter height
        area = 0
        p1 = 0
        p2 = len(height)-1
        
        while p1 < p2:
            # determine whether current area or current max area is greater
            if height[p1] > height[p2]:
                area = max(area, height[p2]*(p2-p1))
                p2-=1
            else:
                area = max(area, height[p1]*(p2-p1))
                p1+=1
                
        return area

heightChart = [1,8,6,2,5,4,8,3,7]
result = maxArea(heightChart)
print(result)