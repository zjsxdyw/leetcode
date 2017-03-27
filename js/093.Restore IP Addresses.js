/**
 * @param {string} s
 * @return {string[]}
 */
//Runtime beats 74.19% of javascript submissions.
var restoreIpAddresses = function(s) {
    const res = [];
    addIpAddresses(s, res, 0, s.length, '', 0);
    return res;
};
var addIpAddresses = function(s, res, start, end, string, time) {
    if(start === end && time === 4) {
        res.push(string);
        return;
    }
    if(time >= 4) return;
    if((4 - time) * 3 < end - start) return;
    for(let i = 1; i + start <= end && i <= 3; i++) {
        let str = s.substr(start, i);
        if(str < 256 && /(^0$)|(^[^0])/.test(str)) {
            addIpAddresses(s, res, start + i, end, time ? string + '.' + str : str, time + 1);
        }
    }
};
