/**
 * @param {number} n
 * @return {number}
 */
//Runtime beats 76.92% of javascript submissions.
var totalNQueens = function(n) {
    const result = {count: 0},
        map = {};
    solve(result, map, 0, n);
    return result.count;
};
var solve = function(result, map, row, n) {
    if(row === n) {
        result.count += 1;
        return;
    }
    for(let i = 0; i < n; i++) {
        if(!map[i] && !map[n + row + i] && !map[4 * n - 2 + i - row]) {
            map[i] = map[n + row + i] = map[4 * n - 2 + i - row] = true;
            solve(result, map, row + 1, n);
            map[i] = map[n + row + i] = map[4 * n - 2 + i - row] = false;
        }
    }
};
