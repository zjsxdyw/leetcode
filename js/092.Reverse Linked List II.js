/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
//Runtime beats 95.08% of javascript submissions.
var reverseBetween = function(head, m, n) {
    if(m === n || !head) return head;
    const first = {next: head};
    let preList = first;
    while(m-- > 1){
        preList = preList.next;
        n--;
    }
    let nowList = preList.next,
        nextList = nowList.next;
    while(n-- > 1) {
        nowList.next = nextList.next;
        nextList.next = preList.next;
        preList.next = nextList;
        nextList = nowList.next;
    }
    return first.next;
};
