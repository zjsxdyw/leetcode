/**
 * @param {number} x
 * @return {number}
 */
//Runtime beats 90.78% of javascript submissions.
var mySqrt = function(x) {
    let i = x;
    while (i*i > x)
        i = ((i + x/i) / 2) | 0;
    return i;
};