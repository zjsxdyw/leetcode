/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//Runtime beats 60.87 % of javascript submissions.
var reorderList = function(head) {
    let p = head,
        n = 0;
    while(p) {
        p = p.next;
        n++;
    }
    if(n < 2) return;
    let mid = n / 2,
        i = mid | 0;
    p = head;
    while(--mid > 0) {
        p = p.next;
    }
    let p1 = p.next;
    p.next = null;
    p = p1;
    p1 = p.next;
    let p2,
        obj = {p: p};
    while(p1) {
        p2 = p1.next;
        p1.next = p;
        p = p1;
        p1 = p2;
    }
    obj.p.next = null;
    while(i--) {
        p1 = head.next;
        p2 = p.next;
        head.next = p;
        p.next = p1;
        p = p2;
        head = p1;
    }
};
