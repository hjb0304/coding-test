/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 두 개의 포인터를 시작점에 두기
    let slow = head;
    let fast = head;

    // 포인터를 1칸/2칸씩 이동
    // fast+1칸까지는 존재하는 조건
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        // 만났다면 사이클 존재
        if(slow === fast) return true;
    }

    return false;
};