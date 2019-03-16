// Stacks using Arrays.

class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array[this.array.length -1];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop() {
		this.array.pop();
		return this;
	}
  printStack() {
    console.log(this.array);
  }
}

const myStack = new Stack;
myStack.push(100);
myStack.push(200);
myStack.push(300);
myStack.push(400);
myStack.pop();
myStack.printStack();