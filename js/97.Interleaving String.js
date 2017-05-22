/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
//Runtime beats 62.50 % of javascript submissions.
var isInterleave = function(s1, s2, s3) {
    let m = s1.length,
        n = s2.length;
    if(m === 0) return s2 === s3;
    if(n === 0) return s1 === s3;
    if(m + n !== s3.length) return false;
    let dp = [[true]];
    for(let i = 0; i <= m; i++) {
        dp[i+1] = [];
        for(let j = 0, str; j <= n; j++) {
            if((str = s3[i+j])) {
                if(s1[i] && str === s1[i]) dp[i+1][j] = dp[i][j];
                if(s2[j] && str === s2[j]) dp[i][j+1] = dp[i][j+1] || dp[i][j];
            }
        }
    }
    return !!(dp[m-1][n] || dp[m][n-1]);
};
