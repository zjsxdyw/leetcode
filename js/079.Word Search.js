/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//Runtime beats 73.49% of javascript submissions.
var exist = function(board, word) {
    for(let i = 0, m = board.length; i < m; i++) {
        for(let j = 0, n = board[i].length; j < n; j++) {
            if(isExisted(board, word, 0, i, j, m, n)) return true;
        }
    }
    return false;
};
var isExisted = function(board, word, index, i, j, m, n) {
    if(index === word.length) return true;
    if(i < 0 || j < 0 || i === m || j === n || board[i][j] !== word[index++]) return false;
    let temp = board[i][j];
    board[i][j] = 0;
    let exist = isExisted(board, word, index, i-1, j, m, n) || isExisted(board, word, index, i, j-1, m, n)
                || isExisted(board, word, index, i+1, j, m, n) || isExisted(board, word, index, i, j+1, m, n);
    board[i][j] = temp;
    return exist;
};
