/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//Runtime beats 71.43% of javascript submissions.
var numDistinct = function(s, t) {
    let m = s.length, n = t.length;
    if(m < n) return 0;
    if(n === 0)return 1;
    const dp = [];
    for(let i = 0; i < m; i++){
        for(let j = n - 1; j >= 0; j--){
            if(s[i] === t[j]){
                dp[j] = (j === 0 ? 1 : (dp[j-1]) || 0) + (dp[j] || 0);
            }
        }
    }
    return (dp[n-1] || 0);
};
