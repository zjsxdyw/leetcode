/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//Runtime beats 57.63% of javascript submissions.
var rotateRight = function(head, k) {
    if(!head) return head;
    let p = head,
        count = 1;
    while(p.next) {
        p = p.next;
        count++;
    }
    p.next = head;
    k = k % count;
    if(k) {
        k = count - k;
        for(let i = 0; i < k; i++) p = p.next;
    }
    let res = p.next;
    p.next = null;
    return res;
};
