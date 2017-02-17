/**
 * @param {string} digits
 * @return {string[]}
 */
//Runtime beats 49.71% of javascript submissions.
var letterCombinations = function(digits) {
    var arr = [];
    return test()(digits, arr, 0);
};
var test = function() {
    var ditc = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': []
    };
    function x(digits, arr, index) {
        if(index === digits.length) return arr;
        var result = [];
        if(arr.length > 0) {
            for(let j = 0, len2 = arr.length; j < len2; j++) {
                for(let i = 0, len = ditc[digits[index]].length; i < len; i++) {
                    result.push(arr[j] + ditc[digits[index]][i]);
                }
            }
        } else {
            for(let i = 0, len = ditc[digits[index]].length; i < len; i++) {
                result.push(ditc[digits[index]][i]);
            }
        }
        var array = x(digits, result, index + 1);
        return array;
    }
    return x;
};
