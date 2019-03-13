// EDIT DISTANCE

/*
The deletion distance of two strings is 
the minimum number of characters you need to delete 
in the two strings in order to get the same string. 
For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", 
we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance 
that returns the deletion distance between them. 
Explain how your function works, and analyze its time and space complexities.
*/

const deletionDistance = (str1, str2) => {
    const str1Len = str1.length;
    const str2Len = str2.length;
    const matrix = [];//new Array(str2Len+1).fill(new Array(str1Len+1).fill(0))
    for(let i = 0; i < str2Len+1; i++){
      let row = [];
      for(let j = 0; j < str1Len+1; j++){
        if(i == 0) row[j] = j;
        else if (j == 0) row[j] = i;
        else row[j] = 0;
      }
      matrix.push(row);
    }
    for(let i = 1; i < str2.length+1; i++){ 
      for(let j = 1; j < str1.length+1; j++){
        if (str2[i-1] == str1[j-1]){
          matrix[i][j] = matrix[i-1][j-1]
        } else {
          matrix[i][j] = 1 + Math.min(matrix[i][j-1], matrix[i-1][j])
        }
      }
    }
    return matrix[str2Len][str1Len]
}

const str1 = 'dog';
const str2 = 'frog';

const str3 = 'some';
const str4 = 'thing';

const result1 = deletionDistance(str1, str2);
const result2 = deletionDistance(str3, str4);

console.log(result2);