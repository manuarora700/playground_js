// Implement Linked List with all the necessary methods 
// Use objects for referencing. Earlier I used arrays, this time objects. Because why not.
// Implement Node class too which contains head and next values only

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		// Set head object
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head; // keep track of tail
		this.length = 1; // Initial length
	}
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    prepend(value) {
    	const newNode = new Node(value);
    	newNode.next = this.head;
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

    // insert(index, value) {

    // }
}
const ll = new LinkedList(10);
ll.append(5);
ll.append(16);
ll.prepend(1);
ll.printList();