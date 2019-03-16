// Implement queues using Linked List

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if(this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else  {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if(!this.first) {
			return null;
		}
		if(this.first === this.last) {
			this.last = null; 
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}
  printQueue() {
    let array = [];
    let f = this.first;
    let l = this.last;
    while(f !== l) {
      array.push(f.value);
      f = f.next;
    }
    array.push(l.value);
    return array;
  }
}

const q = new Queue;
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.enqueue(400);
q.printQueue();
q.dequeue();
q.printQueue();
q.enqueue(100);
q.printQueue();