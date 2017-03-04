/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 66.81% of javascript submissions.
var lengthOfLastWord = function(s) {
    let count = 0;
    for(let i = s.length - 1;i >= 0; i--) {
        if(s[i] !== ' ') count++;
        else if(count === 0) continue;
        else break;
    }
    return count;
};
