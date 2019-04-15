// PALINDROME PARTITIONING MIN CUTS

/*
Given a string, a partitioning of 
the string is a palindrome partitioning if every substring 
of the partition is a palindrome. 
Determine the fewest cuts needed for palindrome partitioning of a given string. 
If a string is palindrome, then minimum 0 cuts are needed.
If a string of length n containing all different characters, then minimum n-1 cuts are needed.

Example 1: 
    Input: “ababbbabbababa”
    Output: 3  // “a|babbbab|b|ababa” 
Example 2:
    Input: "a"
    Output: 0
Example 3: 
    Input: "noonabbad"
    Output: 2 // "noon|abba|d"
*/

// recursive solution
function palindromePartitioningMinCuts(string) {
	// if our input is a palindome, return 0 partitions
	if(isPalindrome(string)) return 0;
    // initialize our min partitions
	let min = Number.MAX_VALUE;
    // loop through and slowly check a growing slice of our string for palindromes
	for(let i = 1; i < string.length; i++){
		// if at this iteration, we have a palindrome, recurse
		if(isPalindrome(string.slice(0, i))){
			let currentSlices = recurse(string.slice(i));
            // set new min partitions between current min 
            // and result of current recursive check
			min = Math.min(min, currentSlices);
		}
	}
	return min;
}

const recurse = (string, slices = 0, minSlices = Number.MAX_VALUE) => {
	// base case: if len str is 0 return the computed partitions
	if(!string.length) {
		return slices
	}
    // if rest of our string in recursive func is a palindrome
    // add 1 to partition and return, no need to loop through
	if(isPalindrome(string)) return slices+1
    // seems a bit redundant, but I was having a hard time 
    // reinitializing the slices and minSlices for the beginning of each iteration
    // so decided to separate the recursive logic from main func
	for(let i = 1; i < string.length; i++){
		if(isPalindrome(string.slice(0, i))){
            // iterate accordingly by incrementing slices each time we find a palindrome
            // then take the minimum returned by recursive func at the end
			let currentSlices = recurse(string.slice(i), slices+1, minSlices);
			minSlices = Math.min(minSlices, currentSlices);
		}
	}
	return minSlices
}

// helper function to find palindrome or not
const isPalindrome = (word) => {
	let p1 = 0;
	let p2 = word.length-1;
	while(p1<p2){
		if(word[p1] !== word[p2])	{
			return false;	
		}
		p1++;
		p2--;
	}
	return true;
}

const input1 = "ababbbabbababa";
const input2 = "a";
const input3 = "noonabbad";
const result = palindromePartitioningMinCuts(input1);

console.log(result);