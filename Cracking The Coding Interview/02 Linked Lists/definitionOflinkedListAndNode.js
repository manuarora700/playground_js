// Node class creates a single node element with data and value

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// LinkedList class is what binds the nodes together, Contains methods to traverse the list and many more. Such as
// Appending in the list or removing from the list.
class LinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let arr = []
    let curr = this.head;

    while(curr !== null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }

  // append at the beginning

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    // this.printList();
  }

  // returns the size of a linked list
  size() {
    let curr = this.head;
    let count = 0;

    while(curr !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  // returns the first node of a linked list. Remember THE FIRST NODE and not the first node's value.

  getFirst() {
    return this.head;
  }

  // Return the last element or the TAIL of the linked list.

  getLast() {
    // beginning checks
    if(!this.head) return null;

    let curr = this.head;

    while(curr) {
      if(curr.next === null)
          return curr;
      else
          curr = curr.next;
    }
  }

  // clear the linked list
  clear() {
    this.head = null;
  }

  // Remove the element from the beginning of the linked list
  removeFirst() {
    // Beginner checks
    if(!this.head) return;
    
    // let curr = this.head;
    // curr = curr.next;
    // this.head = curr;
    //        OR

    this.head = this.head.next;
    // return this.printList();

  }

  // Remove the element from the last Or REMOVE FROM THE TAIL
  removeLast() {
    // If ll doesnt exist
    if(!this.head) return;

    // if size of ll is 1
    if(!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let curr = this.head.next;

    while(curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    // return this.printList();
  }

  // insert at the tail of the ll
  insertLast(data) {

    const last = this.getLast();

    if(last) {
      // there are nodes in our l
      last.next = new Node(data);

    } else {
      // The chain is empty bruv.
      this.head = new Node(data);
    }
  }

  // Get the node at a particular index

  getAt(index) {
    // if(!this.head) return; // list is empty -- unnecessary check, while loop does the check itself.

    let counter = 0;
    let wantIndex = index;

    let curr = this.head;
    while(curr) {
      if (wantIndex === counter) {
        return curr;
      }
      counter++;
      curr = curr.next;
    }
    return null; // Index out of bounds hehehe.
  }
}

const list = new LinkedList();
// list.head = new Node(10);

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.insertFirst(40);
list.insertFirst(50);
list.insertFirst(60);
// list.printList();
// list.size();
// list.getFirst();
// list.getLast();
// list.insertFirst(40);
// list.getLast();
// list.getFirst();
// list.removeFirst();
// list.printList();
// list.removeLast();
list.printList();
list.removeFirst();
list.printList();
list.removeLast();
list.printList();
list.insertFirst(70);
list.printList();
list.insertLast(0);
list.printList();

list.getAt(0);
