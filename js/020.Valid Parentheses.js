/**
 * @param {string} s
 * @return {boolean}
 */
//Runtime beats 72.40% of javascript submissions.
var isValid = function(s) {
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    let stack = [];
    for(let i = 0, str; (str = s[i++]);) {
        if(['(', '{', '['].indexOf(str) > -1) {
            stack.unshift(str);
        } else if(stack.length && obj[stack[0]] === str){
            stack.splice(0, 1);
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
