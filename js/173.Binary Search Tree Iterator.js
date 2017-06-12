/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
//Runtime beats 88.46 % of javascript submissions.
var BSTIterator = function(root) {
    this.arr = [];
    this.add(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.arr.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let node = this.arr.pop();
    this.add(node.right);
    return node.val;
};

BSTIterator.prototype.add = function(node) {
    while(node) {
        this.arr.push(node);
        node = node.left;
    }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
