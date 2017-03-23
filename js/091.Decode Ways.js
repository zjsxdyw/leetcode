/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 80.77% of javascript submissions.
var numDecodings = function(s) {
    if(!s || s[0] === '0') return 0;
    let curWays = 1,
        preWays = 1;
    for(let i = 1, len = s.length; i < len; i++){
        let nowWays = curWays;
        if(s[i] === '0'){
            if(s[i-1] !== '1' && s[i-1] !== '2'){
                return 0;
            } else {
                nowWays = preWays;
            }
        } else if(s[i-1] === '1' || (s[i-1] === '2' && s[i] < 7)){
            nowWays += preWays;
        }
        preWays = curWays;
        curWays = nowWays;
    }
    return curWays;
};
