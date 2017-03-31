/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//Runtime beats 81.77% of javascript submissions.
var inorderTraversal = function(root) {
    const res = [];
    traversal(root, res);
    return res;
};
var traversal = function(root, res) {
    if(!root) return;
    traversal(root.left, res);
    res.push(root.val);
    traversal(root.right, res);
};
