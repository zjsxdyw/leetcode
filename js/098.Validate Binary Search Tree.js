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
//Runtime beats 72.87% of javascript submissions.
var isValidBST = function(root) {
    return isValid(root, null, null);
};
var isValid = function(root, minNode, maxNode) {
    if(!root) return true;
    if(minNode && root.val <= minNode.val || (maxNode && maxNode.val <= root.val)) return false;
    return isValid(root.left, minNode, root) && isValid(root.right, root, maxNode);
};
