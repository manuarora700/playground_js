// Implement Linked List with all the necessary methods 
// Use objects for referencing. Earlier I used arrays, this time objects. Because why not.
// Implement Node class too which contains head and next values only

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
    this.prev = null;
	}
}
class DoublyLinkedList {
	constructor(value) {
		// Set head object
		this.head = new Node(value);
		this.tail = this.head; // keep track of tail
		this.length = 1; // Initial length
	}
    append(value) {
      const newNode = new Node(value);
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
    	const newNode = new Node(value);
    	newNode.next = this.head;
      this.head.prev = newNode;
    	this.head = newNode;
    	this.length++;
    }
 	printList() {
    	const array = [];
    	let currentNode = this.head;
    	while(currentNode !== null) {
    		array.push(currentNode.value);
    		currentNode = currentNode.next;
    	}
    	return array;
    }
    // Display with arrows because I love it. kbye.
    printListPretty() {
    	const array = [];
    	let currentNode = this.head;
    	while(currentNode !== null) {
    		array.push(currentNode.value);
    		currentNode = currentNode.next;
    	}
    	return array.join('->');
    }

    insert(index, value) {
      // Code here.
      if(index >= this.length) {
        return this.append(value);
      }
      if(index === 0) {
        return this.prepend(value);
      }

      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;

      leader.next = newNode; // point to newnode
      newNode.prev = leader;
      newNode.next = follower; // point to next node
      follower.prev = newNode;
    }
    traverseToIndex(index) {
      // Elementary checks -- Do later.
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check for edge cases
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      follower.prev = leader;
      leader.next = unwantedNode.next;
      this.length--;
    }
}
const ll = new DoublyLinkedList(10);
ll.append(5);
ll.append(16);

ll.prepend(1);
ll.insert(2, 99);
ll.insert(0, 37);
ll.printListPretty();