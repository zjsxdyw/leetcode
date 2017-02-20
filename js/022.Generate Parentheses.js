/**
 * @param {number} n
 * @return {string[]}
 */
//Runtime beats 82.84% of javascript submissions.
var generateParenthesis = function(n) {
    const result = [];
    addBrackets(result, '', n, 0);
    return result;
};
var addBrackets = function(arr, str, n, m) {
    if(n === 0 && m === 0) {
        arr.push(str);
        return;
    }
    if(n > 0) addBrackets(arr, str + '(', n - 1, m + 1);
    if(m > 0) addBrackets(arr, str + ')', n, m -1);
};
