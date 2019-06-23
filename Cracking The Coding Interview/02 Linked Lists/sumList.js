/**
Approach 1 (With some little bit of JavaScript touch)
1. Extract the numbers from a linked list using extractNums functions. Reverse the digits using javascript methods
2. Add the numbers
3. Push the numbers into the new list with insertFirst method.

Time - O(N)
Space - O(N)
*/


function sumList(list1, list2) {
  // Extract numbers from the list;
  number1 = Number(extractNums(list1).toString().split('').reverse().join(''));
  number2 = Number(extractNums(list2).toString().split('').reverse().join(''));

  // Sum the list values.
  sum = number1 + number2;

  // Append this number to the linked list in !reverse i.e. same order
  const newList = new LinkedList();
  while(sum != 0) {
    let number = sum % 10;
    newList.insertFirst(number);
    sum = Math.floor(sum/10);
  }
  return newList.printList();
}

function extractNums(list) {
  let s = ""
  let cur = list.head;
  while(cur) {
    s += cur.data;
    cur = cur.next
  }
  return Number(s);
}
const list1 = new LinkedList();
list1.insertFirst(6);
list1.insertFirst(1);
list1.insertFirst(7);
list1.printList()

const list2 = new LinkedList();
list2.insertFirst(2);
list2.insertFirst(9);
list2.insertFirst(5);
list2.printList();

sumList(list1, list2);

import { createNode } from './helpers';

/**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(N) - algorithm doesn't require additional storage in
 * general, additional space is used to create the new list.
 */
export function sumListsReverseOrder(list1, list2) {
  let head = { next: null }, // pseudo node
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum;

  while (node1 && node2) {
    sum = node1.val + node2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2; // go through whatever is remaining of the longer list
  while (node1) {
    sum = node1.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
  }

  if (carry > 0) { // check for any remaining carry
    tail.next = createNode(carry);
  }

  return head.next;
}