/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//Runtime beats 100.00% of javascript submissions.
var isMatch = function(s, p) {
    let i = 0, j = 0, m = s.length, n = p.length, match, asterisk = -1;
    while(i < m) {
        if(j < n && p[j] === '*') {
            match = i;
            asterisk = j++;
        } else if(j < n && (s[i] == p[j] || p[j] == '?')) {
            i++;
            j++;
        } else if(asterisk > -1){
            i = match++;
            j = asterisk + 1;
        } else {
            return false;
        }
    }
    while (j < n && p[j] == '*') j++;
    return j === n;
};
