// ZIGZAG CONVERSION

/* 
The string "PAYPALISHIRING" is written 
in a zigzag pattern on a given number of rows like this: 

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
*/

var convert = function(s, numRows) {
    // if only 1 row, return word as is
    if(numRows <= 1) return s;
    // matrix to map out conversion according to numRows
    const matrix = new Array(numRows).fill(0);
    // string array creates strings per row in a list, to be joined in the end
    const str = new Array(numRows).fill('');
    // dynamic programming tells us which index on matrix to go to next
    // according to the previous index we came from
    // this creates the zig zag pattern
    const prev = [null, null]
    let current = [0, 0]
    const temp = [null, null]
    
    for(let i = 0; i < s.length; i++){
        // looping through and adding letter to strings per indexed row in str array
        // then dynamically mapping to increment current index
        str[current[0]] += s[i];
        indexMapperOnMatrix(prev, current, temp, matrix);
    }
    return str.join('');
};

const indexMapperOnMatrix = (prev, current, temp, matrix) => {
    // changing previous index to become current
    temp[0] = prev[0];
    temp[1] = prev[1];
    prev[0] = current[0];
    prev[1] = current[1];

    // if current is on first row, increment down or diagonal down depending on previous
    if(current[0] === 0){
        if(current[1] === 0){
          current[0]++;
        } else {
          current[0]++;
          current[1]++;
        }
      }
      // if current is on last row
      else if (current[0] === matrix.length-1){
          current[0]--;
          current[1]++;
      } 
      // if current is in the middle, check whether previous is above or below
      else {
          if(temp[0] > current[0]){
            current[0]--;
          } else if(temp[0] < current[0]){
              current[0]++;
          } 
      }
}

const str = "PAYPALISHIRING";
const result = convert(str, 3);
console.log(result);