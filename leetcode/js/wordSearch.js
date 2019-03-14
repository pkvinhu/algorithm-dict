// WORD SEARCH

/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:

    board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

var exist = function(board, word) {
    // base cases
    if(!board.length) return false;
    if(!word.length) return false;
    if(board.length === 1) {  
        return board[0].join('').includes(word) || board[0].reverse().join('').includes(word)
    }
    // loop through board starting at every letter
    for (let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === word[0]){
                // if current letter is starting letter, check every possible path
                const wordFound = checkNeighboringLetters(i, j, board, 1, word);
                // if a path with the word is found, return true, else keep looping
                if(wordFound) {
                    return wordFound
                }
            }
        }
    }
    return false;
};

const checkNeighboringLetters = (i, j, board, letterIdx, word, memo=[], visited = {}) => {
    // if index == len of word, we found the last letter so return
    if(letterIdx === word.length) {
        return true
    }
    
    // create a memo if this is the first checkNeighboringLetters call
    if(!memo.length){
        memo = createMemo(i, j, board, memo)
    }
    for(let k = 0; k < memo.length; k++){
        // if we found the next letter, recurse, and if recursion returns true, a path exists
        // else keep checking path starting from every possible neighbor in memo
        // commented out visited memoize logic - have to revisit - passing 79/86 test cases 
        if(board[memo[k][0]][memo[k][1]] === word[letterIdx]){
            // if(!visited[memo[k][0]],[memo[k][1]]){
                const check = checkNeighboringLetters(memo[k][0], memo[k][1], board, letterIdx+1, word, []);
                if(check) {
                    return check
                }
            }
        // } 
        // visited[memo[k][0]],[memo[k][1]] = true
    }
    return false;
}

// a brute force way of determining the memo depending on board position
// commented out all diagonal/non-adjacent cells for this problem specifically
const createMemo = (i, j, board, memo = []) => {
    if(i === 0) {
        if(j === 0){
            // top left corner
            memo = [
                [i+1, j],
                // [i+1, j+1],
                [i, j+1]
            ] 
        }
        else if(j === board[0].length-1){
            // top right corner
            memo = [
                [i, j-1],
                // [i+1, j-1],
                [i+1, j]
            ]
        } 
        else {
            // top side
            memo = [
                [i, j-1],
                [i, j+1],
                // [i+1, j-1],
                [i+1, j],
                // [i+1, j+1],
            ]
        } 
    }
    else if(i === board.length-1) {
        if(j === 0){
            // bottom left
            memo = [
                [i-1, j],
                // [i-1, j+1],
                [i, j+1]
            ]
        }
        else if(j === board[0].length-1) {
            // bottom right
            memo = [
                // [i-1, j-1],
                [i-1, j],
                [i, j-1]
            ]
        }
        else {
            // bottom side
            memo = [
                // [i-1, j-1],
                [i-1, j],
                // [i-1, j+1],
                [i, j-1],
                [i, j+1]
            ]
        }
    }
    else if(j === 0) {
        // left side
        memo = [
            [i-1, j],
            // [i-1, j+1],
            [i, j+1],
            [i+1, j],
            // [i+1, j+1]
        ]
    }
    else if(j === board[0].length-1) {
        // right side
        memo = [
            // [i-1, j-1],
            [i-1, j],
            [i, j-1],
            // [i+1, j-1],
            [i+1, j]
        ]
    }
    else {
        memo = [
            // [i-1, j-1],
            [i-1, j],
            // [i-1, j+1],
            [i, j-1],
            [i, j+1],
            // [i+1, j-1],
            [i+1, j],
            // [i+1, j+1]
        ]
    }
    return memo;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const result = exist(board, 'ABCCED');
console.log(result);