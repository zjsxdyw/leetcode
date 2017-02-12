/**
 * @param {string} str
 * @return {number}
 */
//Runtime beats 63.93% of javascript submissions.
var myAtoi = function(str) {
    let postive = true, num = 0, i = 0;
    while (str[i] == ' ') {
        i++;
    }
    if (str[i] === '-' || str[i] === '+') {
        postive = str[i++] === '+'; 
    }
    while (str[i] >= '0' && str[i] <= '9') {
        if (num >  214748364 || (num == 214748364 && str[i] > 7)) {
            if (postive) return 2147483647;
            else return -2147483648;
        }
        num  = 10 * num + (str[i++] - 0);
    }
    return num * (postive ? 1 : -1);
};
