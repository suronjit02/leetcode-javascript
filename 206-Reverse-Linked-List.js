/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
};

// console.log(reverseList([1, 2, 3, 4, 5]));
