/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//Runtime beats 41.57% of javascript submissions.
var convert = function(s, numRows) {
    let len = s.length, i = 0, arr = [];
    while (i < len) {
        for (let j = 0; j < numRows && i < len; j++)
            arr[j] = (arr[j] || '') + s[i++];
        for (let j = numRows - 2; j >= 1 && i < len; j--)
            arr[j] = (arr[j] || '') + s[i++];
    }
    let string = '';
    for(let j = 0, length = arr.length; j < length; j++) {
        string += arr[j];
    }
    return string;
};
