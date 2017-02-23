/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Runtime beats 69.50% of javascript submissions.
var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1;
    const result = [-1, -1];
    while (i < j) {
        let mid = parseInt((i + j) / 2);
        if (nums[mid] < target) i = mid + 1;
        else j = mid;
    }
    if (nums[i] !== target) return result;
    else result[0] = i;
    
    j = nums.length - 1;
    while (i < j)
    {
        let mid = parseInt((i + j) / 2) + 1;
        if (nums[mid] > target) j = mid - 1;  
        else i = mid;
    }
    result[1] = j;
    return result; 
};
