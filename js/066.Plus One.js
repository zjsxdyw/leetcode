/**
 * @param {number[]} digits
 * @return {number[]}
 */
//Runtime beats 66.67% of javascript submissions.
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};