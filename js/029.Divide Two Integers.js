/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
//Runtime beats 61.54% of javascript submissions.
var divide = function(dividend, divisor) {
    if (!divisor) return 2147483647;
    if(divisor === 1) return dividend;
    if(divisor === -1) return -dividend > 2147483647 ? 2147483647 : -dividend;
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1,
        result = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) { 
        let temp1 = divisor, multiple = 1, temp2 = temp1;
        while (dividend >= (temp1 <<= 1)) {
            if(temp1 <= 0) break;
            temp2 = temp1;
            multiple <<= 1;
        }
        dividend -= temp2;
        result += multiple;
    }
    return sign == 1 ? result : -result;
};
