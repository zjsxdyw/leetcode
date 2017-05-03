/**
 * @param {string} s
 * @return {string[][]}
 */
//Runtime beats 85.37 % of javascript submissions.
var partition = function(s) {
    if(!s) return [];
    const res = [];
    dfs(s, res, [], 0, s.length);
    return res;
};
var dfs = function(s, res, arr, index, len) {
    if(index === len) {
        res.push([].concat(arr));
        return;
    }
    for(let i = index; i < len; i++) {
        if(isPalindrome(s, index, i)) {
            arr.push(s.substr(index, i - index + 1));
            dfs(s, res, arr, i + 1, len);
            arr.pop();
        }
    }
};
var isPalindrome = function(s, start, end) {
    while(start <= end) {
        if(s[start++] !== s[end--]) return false;
    }
    return true;
};
