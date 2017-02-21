/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime beats 68.29% of javascript submissions.
var removeDuplicates = function(nums) {
    let count = 0,
        i = 0,
        index = 0,
        len = nums.length;
    while(i < len) {
        if(nums[i] !== nums[++i]) {
            count++;
            nums[index++] = nums[i-1];
        }
    }
    return count;
};
