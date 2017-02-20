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
//Runtime beats 68.28% of javascript submissions.
var swapPairs = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    const p = {next: head};
    let current = p;
    while (current.next !== null && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }
    return p.next;
};
