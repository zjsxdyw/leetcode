/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 51.60% of javascript submissions.
var romanToInt = function(s) {
    var dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'CM': 900,
        'CD': 400,
        'XC': 90,
        'XL': 40,
        'IX': 9,
        'IV': 4,
    };
    var num = 0;
    for(var i = 0, len = s.length; i < len; i++) {
        if(dict[s[i] + s[i+1]]) {
            num += dict[s[i] + s[++i]];
        } else {
            num += dict[s[i]];
        }
    }
    return num;
};
