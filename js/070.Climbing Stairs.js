/**
 * @param {number} n
 * @return {number}
 */
//Runtime beats 93.50% of javascript submissions.
var climbStairs = function(n) {
    let a = 1,
        b = 1;
    for(let i = 0; i < n; i++) {
        b += a;
        a = b - a;
    }
    return a;
};
