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
//Runtime beats 69.23 % of javascript submissions.
var sortList = function(head) {
    if(!head || !head.next) return head;
    let p1 = head,
        p2 = head,
        p3;
    while(p2 && p2.next) {
        p3 = p1;
        p1 = p1.next;
        p2 = p2.next.next;
    }
    p3.next = null;
    return mergeTwoLists(sortList(head), sortList(p1));
};

var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let head = new ListNode(),
        p = head;
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
    if(l1 === null) p.next = l2;
    if(l2 === null) p.next = l1;
    return head.next;
};
