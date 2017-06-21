/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//Runtime beats 42.86 % of javascript submissions.
var reverseBits = function(n) {
    let result = 0;
    for (let i = 31, power; i >= 0; i--) {
        power = Math.pow(2, i);
        result += (n / power | 0) * Math.pow(2, 31 - i);
        n %= power;
    }
    return result;
};
