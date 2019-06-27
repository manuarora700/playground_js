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

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  peek() {
    return this.top;
  }

  push(data) {
    
    const node = new Node(data);

    if(this.top === null && this.bottom === null) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }
    return this;
  }

  pop() {
    if(!this.top) return null;
    if(this.top === this.bottom) this.bottom = null;
    const holdingPointer = this.top;
    this.top = this.top.next;

    return this;
  }

    isEmpty() {
      if(!this.bottom) return true;
      return false;
    }
  
    printStack() {
      let array = [];
      let topS = this.top;
      let bottomS = this.bottom;
      while(topS !== bottomS) {
        array.push(topS.data);
        topS = topS.next;
      }
      array.push(bottomS.data);
     return array; 
    } 

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();
stack.push(8);
stack.printStack();
