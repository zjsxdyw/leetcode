/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 85.42 % of javascript submissions.
var findMin = function(nums) {
    let start = 0,
        end = nums.length - 1,
        mid;
    while(start < end) {
        if(nums[start] < nums[end]) return nums[start];
        mid = (start + end) / 2 | 0;
        if(nums[end] < nums[mid]) start = mid + 1;
        else if(nums[end] > nums[mid]) end = mid;
        else end--;
    }
    return nums[start];
};
