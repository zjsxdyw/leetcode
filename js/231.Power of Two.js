/**
 * @param {number} n
 * @return {boolean}
 */
//Runtime beats 98.37 % of javascript submissions.
var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1));
};
