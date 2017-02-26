/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 71.64% of javascript submissions.
var firstMissingPositive = function(nums) {
    const arr = [1];
    for(let i = 0, len = nums.length; i < len; i++) {
        if(nums[i] > 0) arr[nums[i]] = 1;
    }
    for(let i = 0, len = arr.length + 1; i < len; i++) {
        if(arr[i] !== 1) return i;
    }
};
