/**
 * @param {number} n
 * @return {string}
 */
//Runtime beats 93.46 % of javascript submissions.
var convertToTitle = function(n) {
    let str = '';
    while(n > 0) {
        str = String.fromCharCode((n - 1) % 26 + 65) + str;
        n = (n - 1) / 26 | 0;
    }
    return str;
};
