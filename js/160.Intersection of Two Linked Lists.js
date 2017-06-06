/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//Runtime beats 85.09 % of javascript submissions.
var getIntersectionNode = function(headA, headB) {
    let l1 = headA,
        l2 = headB,
        l3 = l1,
        l4 = l2;
    while(l1 && l2) {
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        l1 = l1.next;
        l3 = l3.next;
    }
    while(l2) {
        l2 = l2.next;
        l4 = l4.next;
    }
    while(l3 !== l4) {
        l3 = l3.next;
        l4 = l4.next;
    }
    return l3;
};
