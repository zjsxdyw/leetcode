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
//Runtime beats 79.17% of javascript submissions.
var connect = function(root) {
    if(!root) return;
    let queue = [root];
    while(queue.length) {
        let temp = queue,
            last = null;
        queue = [];
        for(let i = temp.length - 1; i >= 0; i--) {
            temp[i].next = last;
            last = temp[i];
            if(temp[i].right) queue.unshift(temp[i].right);
            if(temp[i].left) queue.unshift(temp[i].left);
        }
    }
};
