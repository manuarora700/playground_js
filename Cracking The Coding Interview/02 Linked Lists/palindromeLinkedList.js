/**
Approach 1
1. Take the linked list
2. Copy the elements from the provided linked list into a new linked list named reversed using a loop/
3. Check if the data in the provided linked list is same as that of the reversed linked list. If not same then return false else return true;
Time - O(N)
Space - O(N)


*/
function palindromell(list) {
  let reversed = new LinkedList();

  let runner = list.head;

  while(runner) {
    reversed.insertFirst(runner.data);
    runner = runner.next;
  }

  let firstListNode = list.head;
  let secondListNode = reversed.head;

  while(firstListNode) {
    if( firstListNode.data !== secondListNode.data) {
      return false;
    }
    firstListNode = firstListNode.next;
    secondListNode = secondListNode.next;
  }


  return true;
}

function reverse(list) {
 let cur = list.head;
 let prev = null

 while(cur) {
   let newTemp = cur.next;
   cur.next = prev;
   prev = cur;
   cur = newTemp;
 }
 list.head = prev;
 return list;
}
const list1 = new LinkedList();
list1.insertFirst(5);
list1.insertFirst(4);
list1.insertFirst(7);
list1.insertFirst(4);
list1.insertFirst(5);
list1.printList()
// list1.printList()
palindromell(list1);


/**
Approach 2 Using Stacks
1. Calculate the length of the linked list
2. Now, if the length is EVEN, Push the elements till the mid of the linked list.
3. Once we reach the mid element, we check the next linked list elements and compare them if the element is equal to the popped element from the stack.
4. If Yes then we continue, if no then we return zero.
5. If the length is ODD, we push the elements til midpoint - 1 length
6. we skip the mid element and start traversing and checking if the next elements are equal to the popped elements from the stack. If yes then we continue, if false we return.

Time - O(N)
Space - O(N) (N/2 but N is fine)
*/

function palindromell(list) {
  let stack = [];
  let cur = list.head;
  let length = 0;
  let counter = 0;
  while(cur) {
    length++;
    cur = cur.next;
  }
  cur = list.head; // resetting current head

  // 1 Traverse to the midpoint of the linked list and keep pushing elements.
  // If the length is odd, push till mid - 1 elements and start popping off from mid+1 element

  if(length % 2 === 0) {
    let mid = length / 2;

    while(counter < mid) {
      stack.push(cur.data);
      cur = cur.next;
      counter++;
    } // Half elements pushed in the stack, Now traverse the other half and start popping off

    while(cur) {
      if(cur.data === stack.pop()) {
        cur = cur.next;
      } else {
        return false;
      }
    }
  }
  // Traverse to the midpoint ka floor - 1.
  if(length % 2 === 1) {
    let mid = Math.floor(length / 2);

    while(counter < mid) {
      stack.push(cur.data);
      cur = cur.next;
      counter++;
    }
    //skip the middle element
    cur = cur.next;

    while(cur) {
      if(cur.data === stack.pop()) {
        cur = cur.next;
      } else {
        return false;
      }
    }
  }
  return !stack.length;
}

const list1 = new LinkedList();
list1.insertFirst(3);
list1.insertFirst(2);
list1.insertFirst(2);
list1.insertFirst(2);
list1.insertFirst(3);
// list1.insertFirst(3);
list1.printList()
// list1.printList()
palindromell(list1);
