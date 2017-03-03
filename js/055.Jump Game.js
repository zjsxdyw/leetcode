/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Runtime beats 80.95% of javascript submissions.
var canJump = function(nums) {
    let currentMax = 0;
    for(let i = 0, len = nums.length - 1; i < len; i++) {
        if(nums[i] !== 0) {
            let num = nums[i] + i;
            currentMax = currentMax > num ? currentMax : num;
            if(currentMax > len) return true;
        } else if(currentMax === i) {
            return false;
        }
    }
    return true;
};
