/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Runtime beats 67.30% of javascript submissions.
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let p;
    if(l1.val <= l2.val) {
        p = l1;
        l1 = l1.next;
    } else {
        p = l2;
        l2 = l2.next;
    }
    let head = p;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if(l1 === null) {
        p.next = l2;
    } else {
        p.next = l1;
    }
    return head;
};
