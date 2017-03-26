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
//Runtime beats 76.62% of javascript submissions.
var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right);
};
var isMirror = function(r1, r2) {
    if(r1 === null && r2 === null) return true;
    if(r1 === null || r2 === null) return false;
    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
};
