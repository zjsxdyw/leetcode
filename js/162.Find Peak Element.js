/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 95.60 % of javascript submissions.
var findPeakElement = function(nums) {
    let n = nums.length;
    for(let i = 1; i < n; i++) 
        if(nums[i-1] > nums[i]) return i-1;
    return n - 1;
};
