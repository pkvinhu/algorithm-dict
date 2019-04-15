// ADDITIVE NUMBER

/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. 
Except for the first two numbers, 
each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', 
write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, 
so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Example 1:
    Input: "112358"
    Output: true 
    Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
                1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:
    Input: "199100199"
    Output: true 
    Explanation: The additive sequence is: 1, 99, 100, 199. 
                1 + 99 = 100, 99 + 100 = 199
*/

// solution is very similar to split fib sequence
// except returns either true or false
// and can deal with big numbers so conditions for big nums is removed
// and can save space on set being passed in recursive func
var isAdditiveNumber = function(num) {
 for(let i = 0; i < num.length; i++) {
        let iSlice = num.slice(0, i+1)
        if(iSlice != 0 && iSlice.startsWith('0')) break;
        for(let j = i+1; j < num.length; j++){
            let jSlice = num.slice(i+1, j+1)
            if(jSlice != 0 && jSlice.startsWith('0')) break;
            let set = [Number(iSlice), Number(jSlice)]
            let fibSequence = recurse(set, num.slice(j+1))
            if(fibSequence && fibSequence !== set) return true
        }
    }
    return false;
};

const recurse = (set, remainingNumStr) => {
    if(!remainingNumStr.length) return set
    let nxt = set[0] + set[1]
    let stringified = String(nxt)
    
    if(remainingNumStr.startsWith(stringified)){
        return recurse([set[1], nxt], remainingNumStr.slice(stringified.length))
    }
    return false;
}

const input1 = "112358";
const input2 = "199100199";
const result = isAdditiveNumber(input2);

console.log(result);