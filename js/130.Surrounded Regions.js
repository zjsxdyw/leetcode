/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//Runtime beats 92.59 % of javascript submissions.
var solve = function(board) {
    if(!board.length) return;
    let m = board.length - 1,
        n = board[0].length - 1;
    const queue = [];
    for(let i = 0; i <= m; i++) {
        if(board[i][0] === 'O') {
            queue.push({ i: i, j: 0 });
            board[i][0] = '1';
        }
        if(board[i][n] === 'O') {
            queue.push({ i: i, j: n });
            board[i][n] = '1';
        }
    }
    for(let i = 0; i <= n; i++) {
        if(board[0][i] === 'O') {
            queue.push({ i: 0, j: i });
            board[0][i] = '1';
        }
        if(board[m][i] === 'O') {
            queue.push({ i: m, j: i });
            board[m][i] = '1';
        }
    }
    while(queue.length) {
        let temp = queue.pop(),
            i = temp.i,
            j = temp.j;
        if(i > 1 && board[i-1][j] === 'O') {
            queue.push({ i: i-1, j: j });
            board[i-1][j] = '1';
        }
        if(i < m && board[i+1][j] === 'O') {
            queue.push({ i: i+1, j: j });
            board[i+1][j] = '1';
        }
        if(j > 1 && board[i][j-1] === 'O') {
            queue.push({ i: i, j: j-1 });
            board[i][j-1] = '1';
        }
        if(j < n && board[i][j+1] === 'O') {
            queue.push({ i: i, j: j+1 });
            board[i][j+1] = '1';
        }
    }
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if(board[i][j] === '1') {
                board[i][j] = 'O';
            } else if(board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
