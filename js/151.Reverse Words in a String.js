/**
 * @param {string} str
 * @returns {string}
 */
//Runtime beats 22.79 % of javascript submissions.
var reverseWords = function(str) {
    let res = '',
        arr = [],
        curIndex = 0;
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] !== ' ') {
            if(!arr[curIndex]) arr[curIndex] = '';
            arr[curIndex] = str[i] + arr[curIndex];
        } else {
            if(arr[curIndex]) {
                res += curIndex === 0 ? arr[curIndex] : (' ' + arr[curIndex]);
                curIndex++;
            }
        }
    }
    if(arr[curIndex]) res += curIndex === 0 ? arr[curIndex] : (' ' + arr[curIndex]);
    return res;
};
//Runtime beats 17.65 % of javascript submissions.
var reverseWords = function(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
};
