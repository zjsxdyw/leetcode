/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//Runtime beats 93.10% of javascript submissions.
var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n === -1) return 1 / x;
    m = myPow(x, parseInt(n / 2));
    return m * m * myPow(x, n % 2);
};
