/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Runtime beats 63.29% of javascript submissions.
var permute = function(nums) {
    const result =[];
    if(nums.length <= 1) return [nums];
    for(let i = 0, len = nums.length; i < len; i++) {
        const arr = permute(nums.slice(0,i).concat(nums.slice(i+1)));
        for(let j = 0; j < arr.length; j++) {
            arr[j].unshift(nums[i]);
            result.push(arr[j]);
        }
    }
    return result;
};
