/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 73.87 % of javascript submissions.
var majorityElement = function(nums) {
    let map = {};
    for(let i = 0, n = nums.length, half = n / 2; i < n; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        if(map[nums[i]] >= half) return nums[i];
    }
};
