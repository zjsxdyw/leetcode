/**
 * @param {string} s
 * @return {boolean}
 */
//Runtime beats 63.78% of javascript submissions.
var isNumber = function(s) {
    var reg1 = /^\s*[+-]?\d*?(\.\d+|\d\.\d*|\d)(e[+-]?\d+)?\s*$/,
        reg2 = /^(\s+|\s*[+-]\s*)$/;
    return (reg1.test(s) && !reg2.test(s));
};