/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Runtime beats 67.57% of javascript submissions.
var sortColors = function(nums) {
    for(let i = 0, j = 0, k = 0, len = nums.length; k < len; k++) {
        let temp = nums[k];
        nums[k] = 2;
        if(temp < 2)
            nums[j++] = 1;
        if(temp === 0)
            nums[i++] = 0;
    }
};
