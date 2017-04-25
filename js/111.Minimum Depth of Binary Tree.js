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
//Runtime beats 43.04 % of javascript submissions.
var minDepth = function(root) {
    if(!root) return 0;
    let queue = [root],
        min = 0;
    while(queue.length) {
        let arr = queue;
        queue = [];
        for(let i = 0, len = arr.length; i < len; i++) {
            if(!arr[i].left && !arr[i].right) return min + 1;
            if(arr[i].left) queue.push(arr[i].left);
            if(arr[i].right) queue.push(arr[i].right);
        }
        min++;
    }
    return min;
};
