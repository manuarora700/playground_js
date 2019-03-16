// Stack using Linked Lists

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
    printStack() {
    let array = [];
    let topS = this.top;
    let bottomS = this.bottom;
    while(topS !== bottomS) {
      array.push(topS.value);
      topS = topS.next;
    }
    array.push(bottomS.value);
    console.log(array);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('Facebook');
myStack.push('Internet');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

