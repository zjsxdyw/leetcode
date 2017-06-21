/**
 * @param {string} s
 * @return {string[]}
 */
//Runtime beats 75.00 % of javascript submissions.
var findRepeatedDnaSequences = function(s) {
    let map = {},
        result = [];
    for(let i = 0, len = s.length - 9, str; i < len; i++) {
        str = s.substr(i, 10);
        if(map[str] === 1) {
            map[str] = 2;
            result.push(str);
        } else if(!map[str]) map[str] = 1;
    }
    return result;
};
