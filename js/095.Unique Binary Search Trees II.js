/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
//Runtime beats 93.33% of javascript submissions.
var generateTrees = function(n) {
    return n > 0 ? getTrees(1, n) : [];
};
var getTrees = function(start, end) {
    const list = [];
    if(start > end) {
        list.push(null);
        return list;
    }
    if(start === end) {
        list.push(new TreeNode(start));
        return list;
    }
    for(let i = start; i <= end; i++) {
        let left = getTrees(start, i-1),
            right = getTrees(i+1, end);
        for(let j = 0, m = left.length; j < m; j++) {
            for(let k = 0, n = right.length; k < n; k++) {
                let node = new TreeNode(i);
                node.left = left[j];
                node.right = right[k];
                list.push(node);
            }
        }
    }
    return list;
};
