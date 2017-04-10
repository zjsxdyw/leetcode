/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//Runtime beats 61.54% of javascript submissions.
var buildTree = function(preorder, inorder) {
    return creatTree(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
};
var creatTree = function(preorder, inorder, preorderStart, preorderEnd, inorderStart, inorderEnd) {
    if(preorderStart > preorderEnd) return null;
    let num = preorder[preorderStart],
        tree = new TreeNode(num),
        index = inorderStart;
    for(; index <= inorderEnd; index++) {
        if(inorder[index] === num) break;
    }
    tree.left = creatTree(preorder, inorder, preorderStart + 1, preorderStart + index - inorderStart, inorderStart, index - 1);
    tree.right = creatTree(preorder, inorder, preorderStart + index - inorderStart + 1, preorderEnd, index + 1, inorderEnd);
    return tree;
};
