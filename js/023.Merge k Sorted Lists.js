/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//Runtime beats 77.42% of javascript submissions.
var mergeKLists = function(lists) {
    let l = new ListNode();
        head = l;
    for(let i = 0; i < lists.length; i++) {
        if(lists[i] === null) {
            lists.splice(i, 1);
            i--;
        }
    }
    lists.sort(function(a, b) {
        return a.val - b.val;
    });
    while(lists.length > 1) {
        let a = lists.shift();
        l.next = a;
        a = a.next;
        l = l.next;
        if(a !== null) {
            lists.splice(arrayIndexOf(a, lists), 0, a);
        }
    }
    l.next = lists[0] || null;
    return head.next;
};
var arrayIndexOf = function(listNode, arr) {
    let max = arr.length - 1,
        min = 0,
        i;
    while(min <= max) {
        i = (min + max) >> 1;
        if(listNode.val > arr[i].val) {
            min = i + 1;
        } else if(listNode.val < arr[i].val) {
            max = i - 1;
        } else {
            return i;
        }
    }
    return min;
};
