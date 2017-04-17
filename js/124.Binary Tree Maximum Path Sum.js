/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//Runtime beats 83.33% of javascript submissions.
var maxPathSum = function(root) {
    const res = {max: root.val};
    maxSum(root, res);
    return res.max;
};
var maxSum = function(root, res) {
    if(!root) return 0;
    let maxLeft = maxSum(root.left, res);
    let maxRight = maxSum(root.right, res);
    let now = root.val + (maxLeft > 0 ? maxLeft : 0) + (maxRight > 0 ? maxRight : 0);
    res.max = Math.max(now, res.max);
    return Math.max(maxLeft, maxRight) > 0 ? Math.max(maxLeft, maxRight) + root.val : root.val;
};
