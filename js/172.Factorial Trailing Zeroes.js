/**
 * @param {number} n
 * @return {number}
 */
//Runtime beats 72.13 % of javascript submissions.
var trailingZeroes = function(n) {
    let res= 0;
    while(n > 0) {
        n = n / 5 | 0;
        res += n;
    }
    return res;
};
