/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//Runtime beats 42.42% of javascript submissions.
var zigzagLevelOrder = function(root) {
    const res = [];
    if(!root) return res;
    traversal(root, res, 0);
    return res;
};
var traversal = function(root, res, height) {
    if(res.length > height) res[height][height % 2 ? 'unshift': 'push'](root.val);
    else res.push([root.val]);
    if(root.left) traversal(root.left, res, height + 1);
    if(root.right) traversal(root.right, res, height + 1);
};
