/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 76.67 % of javascript submissions.
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    let lastMax = nums[0],
        lastMin = nums[0],
        res = nums[0],
        curMax, curMin;
    for (let i = 1, n = nums.length; i < n; i++) {
        curMax = Math.max(Math.max(lastMax * nums[i], lastMin * nums[i]), nums[i]);
        curMin = Math.min(Math.min(lastMax * nums[i], lastMin * nums[i]), nums[i]);
        res = Math.max(curMax, res);
        lastMax = curMax;
        lastMin = curMin;
    }
    return res;
};
