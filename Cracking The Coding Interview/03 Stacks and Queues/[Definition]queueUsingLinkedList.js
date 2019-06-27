// Node class creates a single node element with data and value
// Stack is implemented like this
// []
// \/
// []
// \/
// []
// \/

// Top to down fashion.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek() {
    return this.first;
  }

  enqueue(data) {
    const node = new Node(data);
    if(this.first === null && this.last === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

  }

  dequeue() {
    if(!this.first) return null;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    
    return this;
  }

  isEmpty() {
    if(!this.first) return true;
    return false;
  }
  
  printQueue() {
    let array = [];
    let f = this.first;
    let l = this.last;
    while(f !== l) {
      array.push(f.data);
      f = f.next;
    }
    array.push(l.data);
    return array;
  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(70);
queue.printQueue();
queue.dequeue();