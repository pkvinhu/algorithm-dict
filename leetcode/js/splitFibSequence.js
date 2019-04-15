// SPLIT ARRAY INTO FIBONACCI SEQUENCE

/*
Given a string S of digits, such as S = "123456579", 
we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F 
of non-negative integers such that:

    0 <= F[i] <= 2^31 - 1 -- (that is, each integer fits a 32-bit signed integer type);
    F.length >= 3;
    and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.

Also, note that when splitting the string into pieces, 
each piece must not have extra leading zeroes, 
except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, 
or return [] if it cannot be done.

Example 1:
    Input: "123456579"
    Output: [123,456,579]
Example 2:
    Input: "11235813"
    Output: [1,1,2,3,5,8,13]
Example 3:
    Input: "112358130"
    Output: []
    Explanation: The task is impossible.
Example 4:
    Input: "0123"
    Output: []
    Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
Example 5:
    Input: "1101111"
    Output: [110, 1, 111]
    Explanation: The output [11, 0, 11, 11] would also be accepted.
*/

var splitIntoFibonacci = function(S) {  
    // loop through i to get slice of first number in starting fib sequence
    // only loop as long as i isn't longer than 10 slots because 
    // i slice would be greater than 2^31-1  
    for(let i = 0; i < Math.min(10, S.length); i++) {
        // handle zeros; slices that are longer than 1 digit 
        // but does not equal 0 cannot start sequence
        let iSlice = S.slice(0, i+1)
        if(iSlice != 0 && iSlice.startsWith('0')) break;
        // same looping concept on j slice - second number
        for(let j = i+1; j < Math.min(i+10, S.length); j++){
            // same zero-handling concept with j slice
            let jSlice = S.slice(i+1, j+1)
            if(jSlice != 0 && jSlice.startsWith('0')) break;
            // if each slice of first two numbers meet conditions, recurse
            // recursive function will return sequence if the fub sequence continues to the end
            let set = [Number(S.slice(0, i+1)), Number(S.slice(i+1, j+1))]
            let fibSequence = recurse(set, S.slice(j+1))
            if(fibSequence) return fibSequence
        }
    }
    return [];
};

// helper recursive function
const recurse = (set, remainingNumStr) => {
    // if the set is empty, we've checked all numbers
    // return set if we have more than just the two starting numbers in fib sequence
    if(!remainingNumStr.length) return set.length > 2 ? set : false;
    let nxt = set[set.length-1] + set[set.length-2]
    let stringified = String(nxt)
    
    // if the addition of our last two fib nums are less than 2^31-1
    // and equals next number in str sequence
    // recurse with remaining slice
    if(nxt <= 2**31-1 && remainingNumStr.startsWith(stringified)){
        set.push(Number(stringified));
        return recurse(set, remainingNumStr.slice(stringified.length))
    }
    return false;
}

const input1 = "123456579";
const input2 = "11235813";
const input3 = "112358130";
const input4 = "0123";
const input5 = "1101111";

const result = splitIntoFibonacci(input5);

console.log(result);