/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 45.45 % of javascript submissions.
var singleNumber = function(nums) {
    let ones = 0, twos = 0;
    for(let i = 0, len = nums.length; i < len; i++){
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
};
