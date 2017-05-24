/**
 * @param {string[]} tokens
 * @return {number}
 */
//Runtime beats 39.47 % of javascript submissions.
var evalRPN = function(tokens) {
    let stack = [],
        firest, last;
    for(let i = 0, len = tokens.length; i < len; i++) {
        if(tokens[i] === '+') stack.unshift(stack.shift() + stack.shift());
        else if(tokens[i] === '*') stack.unshift(stack.shift() * stack.shift());
        else if(tokens[i] === '-') {
            last = stack.shift();
            first = stack.shift();
            stack.unshift(first - last);
        }else if(tokens[i] === '/') {
            last = stack.shift();
            first = stack.shift();
            stack.unshift(first / last | 0);
        } else stack.unshift(Number(tokens[i]));
    }
    return stack[0];
};
