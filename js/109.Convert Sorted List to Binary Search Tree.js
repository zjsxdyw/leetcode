/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
//Runtime beats 71.43 % of javascript submissions.
var sortedListToBST = function(head) {
    let p = head,
        len = 0;
    while(p) {
        len++;
        p = p.next;
    }
    return generateNode({next: head}, 0, len - 1);
};
var generateNode = function(p, start, end) {
    if(start > end) return null;
    let mid = (start + end) / 2 | 0,
        left = generateNode(p, start, mid - 1),
        node = new TreeNode(p.next.val);
    p.next = p.next.next;
    node.right = generateNode(p, mid + 1, end);
    node.left = left;
    return node;
};
