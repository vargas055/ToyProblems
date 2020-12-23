/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2
    }
    if(!l2) {
        return l1
    }
    let val1 = l1.val
    let val2 = l2.val
    let mergeNode;
    if (val1 < val2) {
        mergeNode = new ListNode(val1)
        mergeNode.next = mergeTwoLists(l1.next, l2)
    } else {
        mergeNode = new ListNode(val2)
        mergeNode.next = mergeTwoLists(l1, l2.next)
    }
    return mergeNode
};