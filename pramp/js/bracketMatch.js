// BRACKET MATCH

/*
A string of brackets is considered correctly matched if 
every opening bracket in the string can be paired up 
with a later closing bracket, and vice versa. 
For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. 
For instance, “((” could become correctly matched by 
adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, 
write a function bracketMatch that takes a bracket string 
as an input and returns the minimum number of brackets 
you’d need to add to the input in order to make it correctly matched.
*/

const bracketMatch = (text) => {

    //keep track of count
    let openBrackets = 0;
    
    // keep track of unneutralized closing brackets
    let closingBrackets = 0;
    
    //loop through the text for brackets
    for(let i = 0; i < text.length; i++){
        if(text[i] === '('){
          openBrackets++;
        } else if(text[i] === ')') { 
          openBrackets <= 0 ? 
              closingBrackets++ :
              openBrackets--;
        }
    }
    //")("  openBrackets: 1   closingBrackets: 1
    return openBrackets+closingBrackets;
  }

const text1 = '(()'; // => 1
const result1 = bracketMatch(text1);

const text2 = '(())'; // => 0
const result2 = bracketMatch(text2);

const text3 = '())('; // => 2
const result3 = bracketMatch(text3);

console.log(result3)
