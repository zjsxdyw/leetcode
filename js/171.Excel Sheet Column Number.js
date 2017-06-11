/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 91.55 % of javascript submissions.
var titleToNumber = function(s) {
    let num = 0,
        n = 1;
    for(let i = s.length - 1; i >= 0; i--){
        num += (s[i].charCodeAt() - 64) * n;
        n *= 26;
    }
    return num;
};
