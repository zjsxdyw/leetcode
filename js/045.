/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 82.61% of javascript submissions.
var jump = function(nums) {
    let source = 0,
        currentMax = 0,
        lastmax = 0;
    for(let i = 0, len = nums.length - 1; i < len; i++) {
        currentMax = Math.max(currentMax, i + nums[i]);
        if(lastmax === i) {
            source++;
            lastmax = currentMax;
        }
    }
    return source;
};
