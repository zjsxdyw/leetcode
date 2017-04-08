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
//Runtime beats 34.41% of javascript submissions.
var levelOrderBottom = function(root) {
    const res = [];
    traversal(root, res, 0);
    return res;
};
var traversal = function(root, res, height) {
    if(!root) return;
    let len = res.length;
    if(len > height) res[len - height - 1].push(root.val);
    else res.unshift([root.val]);
    traversal(root.left, res, height + 1);
    traversal(root.right, res, height + 1);
};
