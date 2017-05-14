/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
//Runtime beats 88.89 % of javascript submissions.
var copyRandomList = function(head) {
    let p = head,
        newP = {next: null},
        newList = newP,
        map = new Map();
    while(p) {
        newP.next = new RandomListNode(p.label);
        map.set(p, newP.next);
        p = p.next;
        newP = newP.next;
    }
    p = head;
    newP = newList;
    while(p) {
        if(p.random) {
            newP.next.random = map.get(p.random);
        }
        p = p.next;
        newP = newP.next;
    }
    return newList.next;
};
