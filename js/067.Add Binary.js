/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//Runtime beats 74.29% of javascript submissions.
var addBinary = function(a, b) {
    let plusOne = 0,
        temp,
        index = 0,
        str = "",
        len = a.length > b.length ? a.length : b.length;
    while(index < len){
        temp = parseInt(a.charAt(a.length - index - 1) || 0) + parseInt(b.charAt(b.length - index - 1) || 0) + plusOne;
        plusOne = parseInt(temp / 2);
        temp = temp & 0x1;
        str = temp + str;
        index++;
    }
    if(plusOne) str = "1" + str;
    return str;
};