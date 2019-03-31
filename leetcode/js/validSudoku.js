// VALID SUDOKU

/*
Determine if a 9x9 Sudoku board is valid. 
Only the filled cells need to be validated according to the following rules:

    1. Each row must contain the digits 1-9 without repetition.
    2. Each column must contain the digits 1-9 without repetition.
    3. Each of the 9 3x3 sub-boxes of the grid must 
    contain the digits 1-9 without repetition.
    **The Sudoku board could be partially filled, 
    where empty cells are filled with the character '.'.

Example 1:

    Input:
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    Output: true
*/

var isValidSudoku = function(board) {
    let containerRows = [];
    let containerCols = [];
    // loop through rows and cols simultaneously
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
           let row = loop(i, j, board, containerRows);
           let col = loop(j, i, board, containerCols);
           if(!row || !col) {
               return false;
           }
        }
        containerRows = [];
        containerCols = [];
    }
    
    let gridContainer = [];
    // loop through a 3x3 grid
    for(let i = 0; i < 9; i+=3){
        for(let j = 0; j < 9; j+=3){
            let result = loopGrid(i, j, board, gridContainer);
            if(!result) return false;
        gridContainer = [];
        }
    }
    return true;
};

let loop = (i, j, board, container) => {
   let num = board[i][j]
   if(num !== '.'){
       if(container.includes(num)){
           return false;
       }
       container.push(num)
   } 
   return container
}

let loopGrid = (i, j, board, gridContainer) => {
    let row = i;
    let col = j;
    while(row < i+3){
        let num = board[row][col]
        if(num !== '.'){
            if(gridContainer.includes(num)){
                return false;
            } 
            else {
                gridContainer.push(num)
            }
        }
        if(col === j+2){
            row++;
            col = j
        }
        else {
            col++;
        }
    }
    return gridContainer;
}

const test =     [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
const result = isValidSudoku(test);

console.log(result);