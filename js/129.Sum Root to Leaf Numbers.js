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
// Runtime beats 51.22% of javascript submissions.
var sumNumbers = function(root) {
    if(!root) return 0;
    let res = {
        sum: 0
    };
    sum(root, '', res);
    return res.sum;
};
var sum = function(root, str, res) {
    str = str + root.val;
    if(!root.left && !root.right) {
        res.sum += parseInt(str || 0);
    }
    if(root.left) {
        sum(root.left, str, res);
    }
    if(root.right) {
        sum(root.right, str, res);
    }
};
