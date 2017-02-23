/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 70.97% of javascript submissions.
var longestValidParentheses = function(s) {
    const dp = [];
    let open = 0;
    let max = 0;
    for(let i = 0, len = s.length; i < len; i++) {
        if(s[i] === '(') open++;
        if(s[i] === ')' && open > 0) {
            dp[i] = (dp[i-1] || 0) + 2;
            if(i > dp[i]) {
                dp[i] += (dp[i-dp[i]] || 0);
            }
            open--;
        }
        if(dp[i] > max) max = dp[i];
    }
    return max;
};
