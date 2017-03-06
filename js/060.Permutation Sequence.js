/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//Runtime beats 78.05% of javascript submissions.
var getPermutation = function(n, k) {
    const nums = [],
        factorial  = [];
    let str = '';
    factorial[0] = 1;
    for(let i = 1; i <= n; i++) {
        nums.push(i);
        factorial[i] = factorial[i-1] * i;
    }
    k--;
    for(let i = 1; i <= n; i++) {
        let index = parseInt(k / factorial[n-i]);
        str += nums[index];
        nums.splice(index, 1);
        k -= index * factorial[n-i];
    }
    return str;
};
