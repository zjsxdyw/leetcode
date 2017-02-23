/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Runtime beats 72.82% of javascript submissions.
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    let start = 0,
        end = nums.length - 1;
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(nums[mid] > nums[end]) {
            if(target > nums[mid] || target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
    }
    if (start == end && target != nums[start]) return -1;
    return start;
};
