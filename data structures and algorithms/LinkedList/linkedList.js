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
    append(value) {
      const newNode = {
        value: value,
        next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
}
const ll = new LinkedList(10);
ll.append(5);
ll.append(16);
console.log(ll);