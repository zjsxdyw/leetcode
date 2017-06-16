/**
 * @param {number[]} nums
 * @return {string}
 */
//Runtime beats 98.28 % of javascript submissions.
var largestNumber = function(nums) {
    let str = nums.map(a => a + '').sort((a, b) => (b+a) - (a+b)).join('');
    return str[0] === '0' ? '0' : str;
};
