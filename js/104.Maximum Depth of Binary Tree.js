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
//Runtime beats 75.20% of javascript submissions.
var maxDepth = function(root) {
    if(!root) return 0;
    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};
