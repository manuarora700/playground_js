// Implement Linked List with all the necessary methods 
// Use objects for referencing. Earlier I used arrays, this time objects. Because why not.

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
}

const ll = new LinkedList(10);