// KADANE'S ALGORITHM

const kadanesAlgorithm = (array) => {
    let currentMaxEnding = array[0];
      let maxSoFar = array[0];
      for(let i = 1; i < array.length; i++){
        let num = array[i]
          currentMaxEnding = Math.max(num, currentMaxEnding + num);
          maxSoFar = Math.max(maxSoFar, currentMaxEnding)
      }
      return maxSoFar;
}

const result = kadanesAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // => 55
const result2 = kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]) // => -1

console.log(result2)
