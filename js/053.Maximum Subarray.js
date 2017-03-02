/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 75.36% of javascript submissions.
var maxSubArray = function(nums) {
    let maxSum = nums[0],
        lastMaxSum = nums[0];
    for(let i = 1, len = nums.length; i < len; i++){
        lastMaxSum = Math.max(lastMaxSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, lastMaxSum);
    }
    return maxSum;
};
