/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//Runtime beats 55.71% of javascript submissions.
var search = function(nums, target) {
    if(nums.length === 0) return false;
    let start = 0,
        end = nums.length - 1;
    while(start < end) {
        let mid = (start + end) / 2 | 0;
        if(nums[mid] === target) return true;
        if(nums[mid] > nums[end]) {
            if(target > nums[mid] || target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        } else if(nums[mid] < nums[end]) {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        } else {
            end--;
        }
    }
    if (start == end && target != nums[start]) return false;
    return true;
};
