/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Runtime beats 79.31% of javascript submissions.
var nextPermutation = function(nums) {
	if (nums.length <= 1) return;
    
	let i = nums.length - 1;
	while (i > 0 && nums[i] <= nums[i-1]) i--;
	if (i === 0) {
	    let start = 0, end = nums.length - 1;
	    while(start < end) {
	        [nums[start], nums[end]] = [nums[end], nums[start]];
	        start++;
	        end--;
	    }
		return;
	}
	i--;
	let j = nums.length - 1;
	while (nums[i] >= nums[j]) j--;
	
	[nums[i], nums[j]] = [nums[j], nums[i]];
    let start = i + 1, end = nums.length - 1;
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};
