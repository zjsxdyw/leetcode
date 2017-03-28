/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Runtime beats 40.28% of javascript submissions.
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a,b)=> a-b);
    addSubset(nums, res, 0, nums.length, []);
    return res;
};
var addSubset = function(nums, res, start, end, arr) {
    res.push(arr);
    for(let i = start; i < end; i++) {
        if (i == start || nums[i] != nums[i - 1]) {
            addSubset(nums, res, i + 1, end, arr.concat(nums[i]));
        }
    }
};
