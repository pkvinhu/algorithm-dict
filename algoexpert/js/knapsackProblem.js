// KNAPSACK PROBLEM

/*
The knapsack problem or rucksack problem is 
a problem in combinatorial optimization: 
Given a set of items, each with a weight and a value, 
determine the number of each item to include in 
a collection so that the total weight is less than 
or equal to a given limit and 
the total value is as large as possible. 
It derives its name from the problem faced by someone 
who is constrained by a fixed-size knapsack and 
must fill it with the most valuable items.

*description taken from wiki
*/

// recursive solution
function knapsackProblem(items, capacity, maxVal = [0, []], currentValue = [0, []], idx = 0) {
    if(!items.length || capacity === 0) {
        return currentValue
    }
	
	for(let i = 0; i < items.length; i++){
        let next;
        let skip;
		if(capacity-items[i][1] >= 0) {
			next = knapsackProblem(items.slice(i+1), capacity-items[i][1], maxVal, [currentValue[0]+items[i][0], [...currentValue[1], idx+i]], idx+i+1);
		    skip = knapsackProblem(items.slice(i+1), capacity, maxVal, currentValue, idx+i+1);
            if(next[0] > skip[0]) {
                if(next[0] > maxVal[0]) {
                    maxVal = next
                }
            }
            else {
                if(skip[0] > maxVal[0]) {
                    maxVal = skip
                }
            }
	    }		
	}
    if(currentValue[0] > maxVal[0]) {
		maxVal = currentValue
	}
	return maxVal;
}

const input1 = [[1,2],[70,70],[30,30],[69,69], [100,100]] // capacity limit: 100
const input2 = [[1,2], [4,3], [5,6], [6,7]] // capacity limit: 10
const result = knapsackProblem(input2, 10);

console.log(result);