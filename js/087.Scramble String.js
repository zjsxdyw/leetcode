/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//Runtime beats 33.33 % of javascript submissions.
var isScramble = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    let len = s1.length,
        dp = []; 
    for(let i = 0; i < len; i++) {
        dp[i] = [];
        for(let j = 0; j < len; j++) {
            dp[i][j] = [];
        }
    }
	for (let k = 1; k <= len; k++) {
        for (let i = 0; i + k <= len; i++) {
            for (let j = 0; j + k <= len; j++) {
                if (k === 1) dp[i][j][k] = (s1[i] == s2[j]);
                else {
                    for (let q = 1; q < k && !dp[i][j][k]; q++) {
                        dp[i][j][k] = (dp[i][j][q] && dp[i + q][j + q][k - q]) || (dp[i][j + k - q][q] && dp[i + q][j][k - q]);
                    }
                }
			}
        }
	}
	return !!dp[0][0][len];
};
