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
//Runtime beats 62.07% of javascript submissions.
var deleteDuplicates = function(head) {
    if(!head) return head;
    let p = {next: head},
        last = p,
        curVal;
    while(head.next) {
        if(head.val !== head.next.val && head.val !== curVal) {
            last.next = head;
            last = last.next;
        }
        curVal = head.val;
        head = head.next;
    }
    if(head.val !== curVal) last.next = head;
    else last.next = null;
    return p.next;
};
