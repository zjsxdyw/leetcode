/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//runtime beats 92.77% of javascript submissions.
var isSameTree = function(p, q) {
    return (p === null && q === null) || !!(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};
