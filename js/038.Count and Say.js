/**
 * @param {number} n
 * @return {string}
 */
//Runtime beats 63.21% of javascript submissions.
var countAndSay = function(n) {
    if(n < 1)return '';
    let str = '1';
    for(let i = 2; i <= n; i++) {
        let tempStr = '',
            currentStr = str[0],
            count = 0;
        for(let j = 0, len = str.length; j < len; j++) {
            if(str[j] === currentStr) {
                count++;
            } else {
                tempStr += count + currentStr;
                currentStr = str[j];
                count = 1;
            }
        }
        tempStr += count + currentStr;
        str = tempStr;
    }
    return str;
};
