/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//Runtime beats 74.73 % of javascript submissions.
var wordBreak = function(s, wordDict) {
    const dp = [true];
    for(let i = 1, len = s.length; i <= len; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordDict.indexOf(s.substring(j, i)) > - 1){
                dp[i] = true;
                break;
            }
        }
    }
    return !!dp[s.length];
};
