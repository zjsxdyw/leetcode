/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//Runtime beats 76.14% of javascript submissions.
var uniquePaths = function(m, n) {
    if (m > n) return uniquePaths(n, m);
    const dp = [1];
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[j] = dp[j-1] + (dp[j] || 1);
        }
    }
    return dp[m-1];
};