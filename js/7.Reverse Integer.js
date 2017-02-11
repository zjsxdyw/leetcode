/**
 * @param {number} x
 * @return {number}
 */
//Runtime beats 63.35% of javascript submissions.
var reverse = function(x) {
    let str = (x + ''),
        positive = x >= 0,
        result = '',
        end = positive ? 0 : 1;
    for(let i = str.length - 1; i >= end; i--) {
        result += str[i];
    }
    let num;
    if((num = parseInt(result,10)) > 2147483648) return 0;
    return (positive ? 1 : -1) * num;
};
