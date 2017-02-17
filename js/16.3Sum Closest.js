/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Runtime beats 41.62% of javascript submissions.
var threeSumClosest = function(nums, target) {
    var closest = Math.abs(nums[0] + nums[1] + nums[2] - target),
        result = nums[0] + nums[1] + nums[2];
    nums.sort((a,b)=>{return a-b;});
    for(let i = 0,len = nums.length; i < len; i++) {
        let second = i + 1,
            third = len - 1;
        while(second < third) {
            let tempSum = nums[i] + nums[second] + nums[third],
                diff = tempSum - target;
            if(Math.abs(diff) < closest) {
                result = tempSum;
                closest = Math.abs(diff);
            }
            if(diff === 0) {
                return result;
            } else if(diff > 0) {
                third--;
            } else {
                second++;
            }
        }
    }
    return result;
};
