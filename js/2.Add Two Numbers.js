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
//Runtime beats 73.40% of javascript submissions.
var addTwoNumbers = function(l1, l2, flag) {
    var num, sum;
    if(!flag){
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        sum = l1.val + l2.val;
    } else {
        if(l1 === null) l1 = {val: 0, next: null};
        if(l2 === null) l2 = {val: 0, next: null};
        sum = l1.val + l2.val + 1;
    }
    var result = sum / 10,
        l3 = new ListNode(0);
    if(result >= 1) {
        l3.val = sum - 10;
        l3.next = addTwoNumbers(l1.next, l2.next, true);
    } else {
        l3.val = sum;
        l3.next = addTwoNumbers(l1.next, l2.next, false);
    }
    return l3;
};
