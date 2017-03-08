/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
//Runtime beats 62.79% of javascript submissions.
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    const dp = [[obstacleGrid[0][0] ? 0 : 1]];
    for(let j = 1; j < n; j++) {
        if(obstacleGrid[0][j] === 1) {
            dp[0][j] = 0;
        } else {
            dp[0][j] = dp[0][j-1];
        }
    }
    for(let i = 1; i < m; i++) {
        if(obstacleGrid[i][0] === 1) {
            dp[i] = [0];
        } else {
            dp[i] = [dp[i-1][0]];
        }
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};