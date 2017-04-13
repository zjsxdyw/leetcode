/**
 * @param {number[][]} triangle
 * @return {number}
 */
//Runtime beats 54.05% of javascript submissions.
var minimumTotal = function(triangle) {
    const dp = triangle.pop();
    for(let i = triangle.length - 1; i >= 0; i--){
        for(let j = 0,n = triangle[i].length; j < n; j++) {
            dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j];
        }
    }
    return dp[0];
};
