/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 83.13% of javascript submissions.
var removeDuplicates = function(nums) {
    let i = 0,
        index = 0,
        num;
    while((num = nums[i++]) !== undefined) {
        if(index < 2 || num > nums[index-2]) nums[index++] = num;
    }
    return index;
};
