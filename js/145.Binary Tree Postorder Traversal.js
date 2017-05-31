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
//Runtime beats 32.10 % of javascript submissions.
var postorderTraversal = function(root) {
    let res = [];
    traverse(root, res);
    return res;
};
var traverse = function(root, arr) {
    if(!root) return;
    traverse(root.left, arr);
    traverse(root.right, arr);
    arr.push(root.val);
};
