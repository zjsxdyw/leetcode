/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//Runtime beats 95.17% of javascript submissions.
var groupAnagrams = function(strs) {
    const result = [],
        obj = {};
    for(let i = 0, len = strs.length; i < len; i++) {
        let str = strs[i].split('').sort().join("");
        if(obj[str]) {
            obj[str].push(strs[i]);
        } else {
            obj[str] = [strs[i]];
            result.push(obj[str]);
        }
    }
    return result;
};
