/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Runtime beats 91.93% of javascript submissions.
var searchInsert = function(nums, target) {
    let start = 0,
        end = nums.length - 1;
    while(start < end) {
        let mid = parseInt((start + end) / 2, 10);
        if(target === nums[mid]) return mid;
        else if(target > nums[mid]) start = mid + 1;
        else end = mid;
    }
    return nums[start] >= target ? start : start + 1;
};
