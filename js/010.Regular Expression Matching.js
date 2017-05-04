/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//Runtime beats 95.65 % of javascript submissions.
var isMatch = function(s, p) {
    let m = s.length, n = p.length; 
    const dp = [[]];
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        if(i > 0) dp[i] = [];
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
            else dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
        }
    }
    return !!dp[m][n];
};
