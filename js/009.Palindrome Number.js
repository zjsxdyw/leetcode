/**
 * @param {number} x
 * @return {boolean}
 */
//Runtime beats 89.34% of javascript submissions.
var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) return false;
    let str = x + '';
    for(let i = 0, len = str.length, half = len/2; i < half; i++){
        if(str[i] !== str[len-1-i]) return false;
    }
    return true;
};
