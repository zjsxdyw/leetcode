/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
//Runtime beats 50.68% of javascript submissions.
var pathSum = function(root, sum) {
    const res = [];
    addPath(root, sum, res, []);
    return res;
};
var addPath = function(root, sum, res, arr) {
    if(!root) return;
    arr.push(root.val);
    if(root.val === sum && !root.left && !root.right) {
        res.push([].concat(arr));
    } else {
        addPath(root.left, sum - root.val, res, arr);
        addPath(root.right, sum - root.val, res, arr);
    }
    arr.pop();
};
