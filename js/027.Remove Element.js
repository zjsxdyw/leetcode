/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//Runtime beats 93.06% of javascript submissions.
var removeElement = function(nums, val) {
    let length = 0,
        i = 0,
        index = 0,
        len = nums.length;
    while(i < len) {
        if(nums[i] !== val) {
            length++;
            nums[index++] = nums[i];
        }
        i++;
    }
    return length;
};
