// PRIME NUMBER OF SET BITS IN BINARY REPRESENTATION

/*
Given two integers L and R, find the count of numbers 
in the range [L, R] (inclusive) having a prime number of set bits 
in their binary representation.

(Recall that the number of set bits an integer has 
is the number of 1s present when written in binary. 
For example, 21 written in binary is 10101 which has 3 set bits. 
Also, 1 is not a prime.)

    Example 1:

    Input: L = 6, R = 10
    Output: 4
    Explanation:
    6 -> 110 (2 set bits, 2 is prime)
    7 -> 111 (3 set bits, 3 is prime)
    9 -> 1001 (2 set bits , 2 is prime)
    10->1010 (2 set bits , 2 is prime)

*/

var countPrimeSetBits = function(L, R) {
    // keep count of prime numbers in range L to R
    let count = 0;
    for(let i = L; i <= R; i++){
        // current represents the count of binary number 1 bits
        // then checks if count of 1 bits is a prime number count
        let current = i.toString(2).split(/0+/g).join('').length
        if(isPrime(current)) count++;
    }
    return count;
};

// helper function that checks if a number is prime
const isPrime = (num) => {
    for(let i = 2; i < num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return num > 1;
}


const result = countPrimeSetBits(6, 10);
console.log(result);