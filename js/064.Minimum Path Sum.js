/**
 * @param {number[][]} grid
 * @return {number}
 */
//Runtime beats 95.31% of javascript submissions.
var minPathSum = function(grid) {
    let m = grid.length,
        n = grid[0].length;
    const dp = [[grid[0][0]]];
    for(let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    for(let i = 1; i < m; i++) {
        dp[i] = [dp[i-1][0] + grid[i][0]];
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
};