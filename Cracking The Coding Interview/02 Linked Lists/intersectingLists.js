/**
Approach:
1. RUn through each linked list to get the difference of their lengths
2. Run through each linked list to get their tails
3. If their tails are not same then the linked lists arent intersecting.
4. Calculate the difference between their lengths.
5. Set two pointers on the linked list -- at their starting.
6. Advance the longer linked list by the difference.
7. Run through the linked list at the same pace until a common node is found. That is our intersection point.

Time - O(A + B) A - LinkedList1, B- LinkedList2
Space - O(1)
*/

 
function intersection(list1, list2) {
  // If there are no lists at all
  if( !list1 || !list2) return false;

  // If the tail is not same then the linked lists are not intersecting;
  if( getTail(list1) !== getTail(list2) ) return false;

  // Tails are the same, calculate length of linked list and get the difference

  let size1 = countSize(list1);
  let size2 = countSize(list2);

  // Shorter and longer linked lists
  let shorter = size1 < size2 ? list1 : list2;
  let longer = size1 > size2 ? list1 : list2;

  let difference = Math.abs(size1 - size2)

  // Advance longer linked list with difference in lengths
  longer = getKthNode(longer, difference);

  // Move both pointers until you have a collision

  shorter = shorter.head;
  while(shorter != longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return shorter;
}

// advancing the pointer by difference in lengths
function getKthNode(list, difference) {
  let cur = list.head;
  while(cur !== null && difference > 0) {
    cur = cur.next;
    difference--;
  }
  return cur;
}
// code for getting the tail of the linked list
function getTail(list) {
  let cur = list.head;
  while(cur.next) {
    cur = cur.next;
  }
  return cur;
}
// returns length of a linked list
function countSize(list) {
  let length = 0; 
  let cur = list.head;
  while(cur) {
    length++;
    cur = cur.next;
  }

  return length;
}

// Making an intersection for driver code
function makeIntersection(list1, list2) {
  let counter = 0;
  let cur = list2.head;
  while(cur.next) {
    cur = cur.next;
  }
  // cur pointing to last node
  let run = list1.head;
  // Run the loop till the element you want intersection with
  while(run.data !== 6) {
    run = run.next;
  }

  // point cur's next to run
  cur.next = run;

  return list2.printList();
}
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(3);
list1.insertLast(4);
list1.insertLast(5);
list1.insertLast(6);
list1.insertLast(7);

list2.insertLast(11);
list2.insertLast(12);
list2.insertLast(13);
list2.insertLast(14);
makeIntersection(list1, list2);
// getTail(list1);
// list1 and list2 are now intersecting. Driver code is ready
intersection(list1, list2);