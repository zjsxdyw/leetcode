/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//Runtime beats 65.00 % of javascript submissions.
var insertionSortList = function(head) {
    let newHead = new ListNode(),
        p = head, p1, p2;
    while(p) {
        p1 = p.next;
        p2 = newHead;
        while(p2.next && p.val > p2.next.val) {
            p2 = p2.next;
        }
        p.next = p2.next;
        p2.next = p;
        p = p1;
    }
    return newHead.next;
};
