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
//Runtime beats 64.71 % of javascript submissions.
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let p1 = head,
        p2 = head,
        isCycle = false;
    while(p1 && p2) {
        p1 = p1.next;
        if(!p2.next) return null;
        p2 = p2.next.next;
        if(p1 === p2) {
            isCycle = true;
            break;
        }
    }
    if(!isCycle) return null;
    p1 = head;
    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};
