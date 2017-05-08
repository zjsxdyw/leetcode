/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//Runtime beats 61.71 % of javascript submissions.
var isBalanced = function(root) {
    return height(root) !== -1;
};
var height = function(node) {
    if(!node) return 0;
    let left = height(node.left);
    if(left === -1) return -1;
    let right = height(node.right);
    if(right === -1) return -1;
    if(Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
};
