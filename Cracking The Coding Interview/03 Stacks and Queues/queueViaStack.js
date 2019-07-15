/**
 * Queues and Stacks have different orders for extracting items. To create a
 * queue with stacks we have two stacks, one for inserting items and one for
 * extracting them. When dequeuing an item if the extract stack is empty we
 * use queue operations to pop all the items off the insert stack onto the
 * extract stack which will now be in the right order for a queue.
 *
 * N = |MyQueue|
 * Time: enqueue O(1), dequeue O(N)
 * Additional space: O(N) - to hold the input items
 */
export class MyQueue {
  constructor() {
    this.eStack = [];
    this.dStack = [];
  }

  enqueue(value) {
    this.eStack.push(value);
  }

  dequeue() {
    if (this.dStack.length === 0 && this.eStack.length === 0) {
      throw new Error('queue is empty');
    }
    if (this.dStack.length === 0) {
      while (this.eStack.length > 0) {
        this.dStack.push(this.eStack.pop());
      }
    }
    return this.dStack.pop();
  }
}

//================================================ Another method====================================================//
var Stack = require('./../util/Stack');

var myQueue = function() {
  this.front = new Stack();
  this.back = new Stack();
  this.backUp = true;
};

myQueue.prototype.add = function(value) {
  if (!this.backUp) {
    while (!this.front.isEmpty()) {
      this.back.push(this.front.pop());
    }
    this.backUp = true;
  }
  this.back.push(value);
};

myQueue.prototype.remove = function() {
  if (this.backUp) {
    while(!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.pop();
};

myQueue.prototype.peek = function() {
  if (this.backUp) {
    while(!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.peek();
};

myQueue.prototype.isEmpty = function() {
  return this.front.isEmpty() && this.back.isEmpty();
};

/* TEST */
var m = new myQueue();
console.log(m.isEmpty(), true);

m.add('a');
m.add('b');
m.add('c');
m.add('d');
m.add('e');
m.remove();
console.log(m.peek(), 'b');
