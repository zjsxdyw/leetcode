/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//Runtime beats 86.27% of javascript submissions.
var removeNthFromEnd = function(head, n) {
    let p1 = head,
        p2 = {next: head},
        p3 = p2;
        i = 1;
    while(i++ < n) {
        p1 = p1.next;
    }
    while(p1.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p2.next = p2.next.next;
    return p3.next;
};
