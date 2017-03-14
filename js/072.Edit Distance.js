/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//Runtime beats 37.93% of javascript submissions.
var minDistance = function(word1, word2) {
    let dp = [[0]],
        m = word1.length,
        n = word2.length;
    if(m === 0) return n;
    if(n === 0) return m;
    for (let i = 1; i <= m; i++) {
        dp[i] = [i];
        for (let j = 1; j <= n; j++) {
            dp[0][j] = j;
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], Math.min(dp[i][j-1], dp[i-1][j])) + 1;
            }
        }
    }
    return dp[m][n];
};
