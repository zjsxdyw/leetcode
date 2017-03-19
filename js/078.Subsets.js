/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Runtime beats 89.17% of javascript submissions.
var subsets = function(nums) {
    const res = [];
    subset(res, 0, nums.length, nums, []);
    return res;
};
var subset = function(res, start, end, nums, arr) {
    res.push(arr);
    for(let i = start; i < end; i++) {
        let temp = arr.concat(nums[i]);
        subset(res, i + 1, end, nums, temp);
    }
};
