/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
//Runtime beats 73.13% of javascript submissions.
var fullJustify = function(words, maxWidth) {
    const result = [];
    let tempArray = [],
        len = 0;
    for(let i = 0; i < words.length; i++) {
        len += (words[i].length + 1);
        if(len > (maxWidth + 1)) {
            result.push(generateString(tempArray, len - words[i].length - 2, maxWidth));
            len = words[i].length + 1;
            tempArray = [];
            tempArray.push(words[i]);
        } else {
            tempArray.push(words[i]);
        }
    }
    result.push(generateString([tempArray.join(' ')], len - 1, maxWidth));
    return result;
};
var generateString = function(arr, presentWidth, maxWidth) {
    if(arr.length === 1) return addSpace(arr[0], maxWidth - presentWidth);
    let str = '',
        remainder = (maxWidth - presentWidth) % (arr.length - 1),
        quotient = parseInt((maxWidth - presentWidth) / (arr.length - 1), 10);
    for(var i = 0; i < arr.length - 1; i++) {
        if(remainder > 0) {
            str += addSpace(arr[i], quotient + 2);
            remainder--;
        } else {
            str += addSpace(arr[i], quotient + 1);
        }
    }
    str += arr[i];
    return str;
};
var addSpace = function(str, num) {
    while(num-- > 0) {
        str += ' ';
    }
    return str;
};