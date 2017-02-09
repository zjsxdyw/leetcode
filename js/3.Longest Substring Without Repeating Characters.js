/**
 * @param {string} s
 * @return {number}
 */
//Runtime beats 77.30% of javascript submissions.
var lengthOfLongestSubstring = function(s) {
    let subs = "",
        maxLength = 0,
        index = 0;
    for(let i = 0, len = s.length; i < len; i++){
        index = subs.indexOf(s[i]);
        if(index > -1){
            maxLength = subs.length >　maxLength ? subs.length : maxLength;
            subs = subs.substr(index + 1);
        }
        subs += s[i];
    }
    maxLength = subs.length >　maxLength ? subs.length : maxLength;
    return maxLength;
};
