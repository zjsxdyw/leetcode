/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//Runtime beats 75.96 % of javascript submissions.
var sortedArrayToBST = function(nums) {
    return generateNode(nums, 0, nums.length - 1);
};
var generateNode = function(nums, start, end) {
    if(start > end) return null;
    let mid = (end + start) / 2 | 0,
        node = new TreeNode(nums[mid]);
    node.left = generateNode(nums, start, mid - 1);
    node.right = generateNode(nums, mid + 1, end);
    return node;
};
