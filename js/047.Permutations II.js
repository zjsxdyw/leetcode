/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Runtime beats 71.82% of javascript submissions.
var permuteUnique = function(nums) {
    nums.sort((a,b)=> a-b);
    return permute2(nums);
};
var permute2 = function(nums) {
    const result =[];
    if(nums.length <= 1) return [nums];
    for(let i = 0, len = nums.length; i < len; i++) {
        if(nums[i] === nums[i-1]) continue;
        const arr = permute2(nums.slice(0,i).concat(nums.slice(i+1)));
        for(let j = 0; j < arr.length; j++) {
            arr[j].unshift(nums[i]);
            result.push(arr[j]);
        }
    }
    return result;
};
