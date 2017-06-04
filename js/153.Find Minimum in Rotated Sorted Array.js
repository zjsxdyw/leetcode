/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 97.85 % of javascript submissions.
var findMin = function(nums) {
    let start = 0,
        end = nums.length - 1,
        mid;
    while(start < end) {
        if(nums[start] < nums[end]) return nums[start];
        mid = (start + end) / 2 | 0;
        if(nums[start] <= nums[mid]) start = mid + 1;
        else end = mid;
    }
    return nums[start];
};
