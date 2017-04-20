/**
 * @param {string} s
 * @return {boolean}
 */
//Runtime beats 44.75% of javascript submissions.
var isPalindrome = function(s) {
    let i = 0, j = s.length - 1,
        reg = /\W/;
    while(i < j) {
        if(reg.test(s[i])) {
            i++;
        } else if(reg.test(s[j])) {
            j--;
        } else if(s[i].toLowerCase() === s[j].toLowerCase()) {
            i++;
            j--;
        } else return false;
    }
    return true;
};
