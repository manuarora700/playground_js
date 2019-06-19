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

  // append at the beginning
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.printlist();
  }

  // print list in an array form
  printlist() {
    let arr = []
    let curr = this.head;

    while(curr !== null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }
}

const list = new LinkedList();
// list.head = new Node(10);

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.printlist();