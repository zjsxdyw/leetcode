/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//Runtime beats 62.93% of javascript submissions.
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    if (!haystack || !needle) return -1;
    let l1 = haystack.length,
        l2 = needle.length;
    for (let i = 0; ; ++i) {
        for (let j = 0; ; ++j) {
            if (j === l2) return i;
            if (i + j === l1) return -1;
            if (haystack[i + j] !== needle[j]) break;
        }
    }
};
