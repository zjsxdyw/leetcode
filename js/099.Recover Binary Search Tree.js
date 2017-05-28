/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//Runtime beats 50.00 % of javascript submissions.
var recoverTree = function(root) {
    let obj = {
        lastNode: new TreeNode(-Infinity),
        firstNode: null,
        secondNode: null
    };
    traverseTree(root, obj);
    [obj.firstNode.val, obj.secondNode.val] = [obj.secondNode.val, obj.firstNode.val];
};
var traverseTree = function(node, obj) {
    if(!node) return;
    traverseTree(node.left, obj);
    if(obj.firstNode === null && obj.lastNode.val >= node.val) {
        obj.firstNode = obj.lastNode;
    }
    if(obj.firstNode && obj.lastNode.val >= node.val) {
        obj.secondNode = node;
    }
    obj.lastNode = node;
    traverseTree(node.right, obj);
};
