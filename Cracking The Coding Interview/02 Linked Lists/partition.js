/**
Approach 1
1. Create a new linked list.
2. If the node's value < partition Value then call insertFirst(); [Inserts at the head position]. 
Else call insertLast(); [Inserts at the tail position]
3. This way the elements in the beginning will be less than the pivot provided and elements after pivot will always be greater.

Time O(N)
Space O(N)
*/

function partition(list, partitionValue) {
  const newList = new LinkedList();

  let curr = list.head;
  while(curr) {
    if(curr.data < partitionValue) {
      newList.insertFirst(curr.data);
      curr = curr.next;
    } else {
      newList.insertLast(curr.data);
      curr = curr.next;
    }
  }

  return newList.printList();
  
}
const list = new LinkedList();
list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(8);
list.insertFirst(5);
list.insertFirst(10);
list.insertFirst(2);
list.insertFirst(1);
list.printList();
// Calling functions
partition(list, 5);

/**
Approach 2
1. Maintain two linked lists. 1 contains values less than the pivot, the other contains value greater than the pivot.
2. Merge both the lists when done iterating over the list.
*/


function partition(list, partitionValue) {
  const lesser = new LinkedList();
  const greater = new LinkedList();

  // console.log(lesser);
  let cur = list.head;
  // console.log(cur);
  while(cur) {
    if(cur.data >= partitionValue) {
      greater.insertFirst(cur.data);
      cur = cur.next;
    } else {
      lesser.insertFirst(cur.data);
      cur = cur.next;
      
    }
  }
    // console.log(cur);
    // console.log(lesser.printList());
    let lesserChecker = lesser.head;
    let greaterChecker = greater.head;
    if(!lesserChecker.next) return greater.printList();
    if(!greaterChecker.next) return lesser.printList();
    
    let smallHead = lesser.head;
    while(smallHead.next) {
      smallHead = smallHead.next;
    }
    smallHead.next = greater.head;
   return lesser.printList();
}

const list = new LinkedList();
// list.head = new Node(10);

list.insertFirst(3);
list.insertFirst(5);
list.insertFirst(8);
list.insertFirst(5);
list.insertFirst(10);
list.insertFirst(2);
list.insertFirst(1);

// list.printList();


// list.removeAt()
// list.insertFirst(80)
// list.printList();
// list.removeAt(6);
// list.printList();

partition(list, 2);