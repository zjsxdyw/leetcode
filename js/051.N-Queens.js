/**
 * @param {number} n
 * @return {string[][]}
 */
//Runtime beats 66.67% of javascript submissions.
var solveNQueens = function(n) {
    const result = [],
        queens = [],
        map = {};
    for(let i = 0; i < n; i++) {
        queens[i] = '.'.repeat(n);
    }
    solve(result, queens, map, 0, n);
    return result;
};
var solve = function(result, queens, map, row, n) {
    if(row === n) {
        result.push(clone(queens, n));
        return;
    }
    for(let i = 0; i < n; i++) {
        if(!map[i] && !map[n + row + i] && !map[4 * n - 2 + i - row]) {
            map[i] = map[n + row + i] = map[4 * n - 2 + i - row] = true;
            queens[row] = '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1);
            solve(result, queens, map, row + 1, n);
            map[i] = map[n + row + i] = map[4 * n - 2 + i - row] = false;
            queens[row][i] = '.'.repeat(n);
        }
    }
};
var clone = function(arr, n) {
    const result = [];
    for(let i = 0; i < n; i++) {
        result[i] = arr[i];
    }
    return result;
};
