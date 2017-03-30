/**
 * @param {number} n
 * @return {number[]}
 */
//Runtime beats 65.22% of javascript submissions.
var grayCode = function(n) {
    const res = [];
    for (let i = 0; i < 1<<n; i++) res.push(i ^ i>>1);
    return res;
};
