// SPIRAL ORDER OF MATRIX

/*
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.
*/

var spiralOrder = function(matrix) {
    // base case: if matrix has no length
    if (!matrix.length) {
        return matrix
    }
    // start at outer edges, increment layer when spiral moves toward center
    let layer = 0;
    // pointers i, j (or row, col) navigates index in spiral path
    let i = 0;
    let j = 0;
    let [ r, c ] = [ matrix.length-1, matrix[0].length-1 ];
    // total length of result array
    let totalLen = matrix.length * matrix[0].length;
    // empty result arr container
    const result = [];
    
    while (result.length !== totalLen) {
        result.push(matrix[i][j]);
        if(i == 0+layer) {
            j == c-layer ? i++ : j++
        }
        else if (j == c-layer) {
            i == r-layer ? j-- : i++
        }
        else if (i == r-layer) {
            j == 0+layer ? i-- : j--
        }
        else if(j == 0+layer) {
            if(i-1-layer == 0) {
                layer++;
                j++;
            } else {
                i--;
            }
        }
    }
    return result;
};


const matrix = [[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]
const matrix2 = [[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],[ 9, 10, 11, 12 ]]
const result = spiralOrder(matrix2);
console.log(result)
