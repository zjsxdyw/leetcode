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
//Runtime beats 90.63% of javascript submissions.
var reverseKGroup = function(head, k) {
    const arr = [];
    let temp = head;
    for(let i = 0; i < k; i++) {
        if(temp !== null) {
            arr.push(temp);
            temp = temp.next;
        } else {
            return head;
        }
    }
    for(let i = arr.length - 1; i > 0; i--) {
        arr[i].next = arr[i - 1];
    }
    arr[0].next = reverseKGroup(temp, k);
    return arr[arr.length - 1];
};
