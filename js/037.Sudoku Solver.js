/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//Runtime beats 56.52% of javascript submissions.
var solveSudoku = function(board) {
    const rows = [],
        columns = [],
        matrixes = [],
        stack = [];
    for(let i = 0; i < 9; i++) {
        rows[i] = {};
        columns[i] = {};
        matrixes[i] = {};
    }
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] !== '.') {
                let n = 3 * parseInt(i/3, 10) + parseInt(j/3, 10);
                set(rows, columns, matrixes, i, j, n, board[i][j], true);
            }
        }
    }
    let start = 1;
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') {
                let k = start;
                let n = 3 * parseInt(i/3, 10) + parseInt(j/3, 10);
                for(; k <= 9; k++) {
                    if(!has(rows, columns, matrixes, i, j, n, k)) {
                        board[i][j] = k;
                        stack.push({
                            i: i,
                            j: j,
                            num: k
                        });
                        set(rows, columns, matrixes, i, j, n, board[i][j], true);
                        break;
                    }
                }
                if(k === 10) {
                    const last = stack.pop();
                    i = last.i;
                    j = last.j;
                    board[i][j] = '.';
                    n = 3 * parseInt(i/3, 10) + parseInt(j/3, 10);
                    set(rows, columns, matrixes, i, j, n, last.num, false);
                    start = last.num + 1;
                    if(j === 0) {
                        i--;
                        j = 9;
                    } else {
                        j--;
                    }
                } else {
                    start = 1;
                }
            }
        }
    }
};
var set = function(rows, columns, matrixes, i, j, n, num, value) {
    rows[i][num] = value;
    columns[j][num] = value;
    matrixes[n][num] = value;
};
var has = function(rows, columns, matrixes, i, j, n, num) {
    return rows[i][num] || columns[j][num] || matrixes[n][num];
};
