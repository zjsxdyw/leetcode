/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//Runtime beats 64.62% of javascript submissions.
var flatten = function(root) {
    if(!root) return;
    flatten(root.right);
    flatten(root.left);
    let right = root.right;
    root.right = root.left;
    root.left = null;
    while(root.right) {
        root = root.right;
    }
    root.right = right;
};
