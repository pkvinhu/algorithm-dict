// PANCAKE SORT

/*
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order 
of the first k elements in the array arr.

Write a function pancakeSort(arr) that sorts 
and returns the input array. 
You are allowed to use only the function flip you wrote 
in the first step in order to make changes in the array.

Example:
    input:  arr = [1, 5, 4, 3, 2]
    output: [1, 2, 3, 4, 5] 

Note: it’s called pancake sort because it resembles 
sorting pancakes on a plate with a spatula, 
where you can only use the spatula to flip some of 
the top pancakes in the plate. 
*/

function pancakeSort(arr) {
    // if n == 0
    if(!arr.length) return arr;
    // keep track of max num at every loop
    let max = Number.MIN_VALUE;
    // will use max index to flip every iteration's max number to the front
    let maxIndex;
    // k will decrement at every iteration 
    // after max num has been moved to the end
    // so that we only check numbers yet unsorted at the moment
    let k = arr.length;
    // we have to loop O(n) to sort numbers one by one, or stack by stack
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < k; j++){
            // check for max and maxIndex up to k length
            max = Math.max(max, arr[j])
            if(arr[j] === max) maxIndex = j
        }
        // reverse max number to front
        // and reverse max number to end
        // then decrement k because k to n is sorted
        // reinitiate max value
        arr = flip(arr, maxIndex+1)
        arr = flip(arr, k)
        k--;
        max = Number.MIN_VALUE
    }
    return arr;
  }
  
const flip = (arr, k) => {
    // if n is 1 or 0, reversed == not reversed
    if(k < 2) return arr;
    // keep pointers and swap values until it hits the middle
    let p1 = 0;
    let p2 = k-1;
    while(p1 < p2){
        let temp = arr[p1];
        arr[p1] = arr[p2]
        arr[p2] = temp;
        p1++;
        p2--;
    }
    return arr;
}

const result = pancakeSort([1,5,4,3,2]);

console.log(result);
  