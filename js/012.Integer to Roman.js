/**
 * @param {number} num
 * @return {string}
 */
//Runtime beats 73.76% of javascript submissions.
var intToRoman = function(num) {
    var param = [
        {key: 1, str: 'I'},
        {key: 5, str: 'V', diff: true},
        {key: 10, str: 'X'},
        {key: 50, str: 'L', diff: true},
        {key: 100, str: 'C'},
        {key: 500, str: 'D', diff: true},
        {key: 1000, str: 'M'}
    ],
    remainder, quotient, quotient2, str = '';
    for(var i = param.length - 1; i >= 0; i--) {
        if(param[i].diff) {
            quotient2 = parseInt(num / param[i-1].key);
        } else {
            quotient2 = 0;
        }
        quotient = parseInt(num / param[i].key);
        remainder = num % param[i].key;
        if(quotient2 === 9){
            str += (param[i-1].str + param[i+1].str);
            remainder = num - quotient2 * param[i-1].key;
        } else if(quotient === 4) {
            str += (param[i].str + param[i+1].str);
        } else {
            str += repeat(param[i].str , quotient);
        }
        num = remainder;
    }
    return str;
};
var repeat = function(str, count) {
    var result = '';
    while(count > 0) {
        result += str;
        count--;
    }
    return result;
};
