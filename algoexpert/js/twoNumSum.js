// TWO NUMBER SUM

const twoNumberSum = (array, targetSum) => {
      array.sort((a, b) => {a-b});
      let first = 0;
      let second = array.length-1;
      while(first < second){
          let num1 = array[first];
          let num2 = array[second];
        let sum = num1 + num2;
          if(sum === targetSum){ return [num1, num2] }
          else if (sum < targetSum) { first++ }
          else if (sum > targetSum) { second-- }
      }
      return [];
  }


  const result = twoNumberSum([4, 6], 10) // => [4, 6]
  const result2 = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10) // => [-1, 11]
  const result3 = twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18) // => [3, 15]

  console.log(result3)