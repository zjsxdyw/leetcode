/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//Runtime beats 36.36% of javascript submissions.
var buildTree = function(inorder, postorder) {
    return creatTree(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};
var creatTree = function(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd) {
    if(postorderStart > postorderEnd) return null;
    let num = postorder[postorderEnd],
        tree = new TreeNode(num),
        index = inorderStart;
    for(; index <= inorderEnd; index++) {
        if(inorder[index] === num) break;
    }
    let x = postorderStart + index  - inorderStart;
    tree.left = creatTree(inorder, postorder, inorderStart, index - 1, postorderStart, x - 1);
    tree.right = creatTree(inorder, postorder, index + 1, inorderEnd, x, postorderEnd - 1);
    return tree;
};
