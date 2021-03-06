// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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
var deleteDuplicates = function(head) {
    let root = head;
    
    if(head == null) return head;
    
    while(head.next != null) {
        if(head.val != head.next.val)
            head = head.next;
        else {
            head.next = head.next.next;
        }
    }
    return root;
};