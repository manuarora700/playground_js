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
