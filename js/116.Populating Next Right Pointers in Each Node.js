/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
//Runtime beats 48.00% of javascript submissions.
var connect = function(root) {
    if(!root) return;
    let start = root;
    start.next = null;
    while(start.left) {
        let cur = start;
        while(cur) {
            cur.left.next = cur.right;
            if(cur.next) cur.right.next = cur.next.left;
            cur = cur.next;
        }
        start = start.left;
    }
};
