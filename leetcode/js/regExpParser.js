// REGULAR EXPRESSION PARSER

/*
Given an input string (s) and a pattern (p), 
implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:
    s could be empty and contains only lowercase letters a-z.
    p could be empty and contains only lowercase letters a-z, and characters like . or *.
    
Example 1:
    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

Example 2:
    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".
    
Example 4:
    Input: s = "aab", p = "c*a*b"
    Output: true
    Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
    
Example 5:
    Input: s = "mississippi", p = "mis*is*p*."
    Output: false
*/

// RECURSIVE SOLUTION 1
var isMatch = function(s, p) {

    // initialize recursive helper function
    const matchRegExp = (text, pattern, tp, pp) => {
        // if text pointer has reached end of text
        if(tp >= text.length){
            // if pattern is also at the end, we have a match
            if(pp >= pattern.length){
                return true;
            }
            // if pattern is not at the end but has 'x*', 
            // skip over the next 2 indexes of pattern
            else if(pattern[pp+1] == '*'){
                return matchRegExp(text, pattern, tp, pp+2)
            }
            // else pattern has not reached the end, return false
            else {
                return false;
            }
        }

        // if pattern pointer has reached the end but text pointer has not, 
        // return false
        else if(pp >= pattern.length){
            return false;
        }

        // neither pointers are at the end
        // but we've found an asterisk at index next to x at p pointer
        else if(pp+1 < pattern.length && pattern[pp+1] == '*'){
            // if characters match or we have a wild card
            // recursively either skip over asterisk pattern 
            // in the case that char at tp has upcoming matches or
            // increment tp to check consecutive matches to asterisk pattern
            // this becomes a binary search
            if(pattern[pp] == text[tp] || pattern[pp] == '.'){
                return matchRegExp(text, pattern, tp, pp+2) || matchRegExp(text, pattern, tp+1, pp)
            }
            // else there are 0 matches and we can skip over asterisk pattern
            else {
                return matchRegExp(text, pattern, tp, pp+2)
            }
        }

        // else no asterisk and we're not at the end
        // but we have either at char or wild card match
        // increment both by 1
        else if(pattern[pp] == '.' || pattern[pp] == text[tp]){
            return matchRegExp(text, pattern, tp+1, pp+1);
        }

        // else we have a non-match, return false
        else {
            return false;
        }
    }
  
    // return result of recursive call   
    return matchRegExp(s, p, 0, 0);
}

// RECURSIVE SOLUTION 2 
// Less verbose but greater space complexity because instead of using pointers
// we are creating sliced copies of s and p
/*

var isMatch = function(s, p) {
    if(!p.length) return !s.length;
    
    let match = s.length && (p[0] == s[0] || p[0] == '.')
    
    if(p.length >= 2 && p[1] == '*'){
        return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    }
    
    else return match && isMatch(s.slice(1), p.slice(1))
}

*/

const result1 = isMatch('mississippi', "mis*is*p*."); // false
const result2 = isMatch('aab', "c*a*b") // true
console.log(result2);