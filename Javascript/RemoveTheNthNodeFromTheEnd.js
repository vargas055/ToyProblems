/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    let p = head, node = head
    
    while(n--){ ///help determine what node is the one previous to the one that needs to be deleted
        p = p.next
    }
    while(p && p.next ) { //while
        p = p.next
        node = node.next
    }
    
    if (!p)  head = head.next
    else node.next = node.next.next

    return head
}; /// way 1


var removeNthFromEnd = function(head, n) {
    let root = head;
    let clone = head;
    let len = 0;
   
    while (clone) {
      len++;
      clone = clone.next;
    }
    
    let count = len - n;
    if (count === 0) return head.next;
    while (root && count > 1) {
      root = root.next;
      count--;
    }
  
    root.next = root.next && root.next.next;
    return head;
  };///// way 2


  var removeNthFromEnd = function(head, n) {
    const help = (root, count) => {
      if (root.next) count = help(root.next, count);
      
      if (count === n) root.next = root.next.next;
      return ++count;
    }
    const count = help(head, 0);
    return count === n ? head.next : head;
  };//// way 3




  var removeNthFromEnd = function(head, n) {
    const root = new ListNode(0);
    root.next = head;
    let front = root;
    let back = root;
    while (n >= 0) {
      front = front.next;
      n--;
    }
    while (front) {
      front = front.next;
      back = back.next;
    }
    back.next = back.next.next;
    return root.next;
  };//// way 4