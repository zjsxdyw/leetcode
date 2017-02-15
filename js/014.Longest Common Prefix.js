/**
 * @param {string[]} strs
 * @return {string}
 */
//Runtime beats 54.92% of javascript submissions.
var longestCommonPrefix = function(strs) {
    var string = strs[0] || '',
        slen = string.length;
    for(var i = 1, len = strs.length; i < len; i++) {
        while(strs[i].substring(0, slen) !== string) {
            slen--;
            if(slen === 0) {
                return '';
            }
            string = string.substring(0, slen);
        }
    }
    return string;
};
