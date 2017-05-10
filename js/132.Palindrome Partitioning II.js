/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 50.00 % of javascript submissions.
var minCut = function(s) {
    const isPalindrome = [],
        dp = [];
    for(let i = 0, len = s.length; i < len; i++) {
        let min = i;
        isPalindrome[i] = [];
        for(let j = 0; j <= i; j++) {
            if(s[j] === s[i] && (j > i - 2 || isPalindrome[j+1][i-1])) {
                isPalindrome[j][i] = true;
                min = j === 0 ? 0 : Math.min(min, dp[j - 1] + 1);
            }
        }
        dp[i] = min;
    }
    return dp[s.length - 1];
};
