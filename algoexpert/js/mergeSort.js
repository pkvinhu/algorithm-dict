// MERGE SORT

const mergeSort = (array) => {
	let sortedArray = [];
  if(array.length <= 1){
	  sortedArray=array;	
	}
	else {
	  let left = mergeSort(array.slice(0, array.length-1));
	  let right = mergeSort(array.slice(array.length-1));
	  sortedArray = merge(left, right);
	}
	return sortedArray;
}

const merge = (set1, set2) => {
  let result = [];
	while(set1.length || set2.length){
		if(set1.length && set2.length){
			if(set1[0] < set2[0]){
				result.push(set1.shift());
			}
			else {
				result.push(set2.shift())
			}
		}
		else if(set1.length){
		  result.push(set1.shift());	
		}
		else if(set2.length){
		  result.push(set2.shift());	
		}
	}
	return result;
}

const set = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];
const result = mergeSort(set);
console.log(result);
