/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 79.60% of javascript submissions.
var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0, len = nums.length; i < len; i++) {
        res ^= nums[i];
    }
    return res;
};
