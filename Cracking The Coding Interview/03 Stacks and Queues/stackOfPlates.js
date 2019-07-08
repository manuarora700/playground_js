/**
 * StackOfStacks uses multiple smaller stacks to hold values. New stacks are
 * created or dropped as required. popAt allows for an item to be popped from
 * any stack, when that occurs items from subsequent stacks are taken and moved
 * forward in the list of stacks so that there are no gaps.
 *
 * N = total number of items
 * M = size of smaller stack
 * Time: push O(1), pop O(1), popAt O(N)
 * Additional space: push O(1), pop O(1), popAt O(M)
 */
export class StackOfStacks {
  constructor(maxSize) {
    if (arguments.length < 1) {
      throw new Error('maxSize argument is required');
    }
    this.stacks = [[]];
    this.max = maxSize;
  }

  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.max) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(value);
  }

  pop() {
    let value = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(number) {
    if (number < 1 || number > this.stacks.length) {
      throw new Error('stack number is invalid');
    }
    if (number === this.stacks.length) {
      return this.pop();
    }

    let stack = this.stacks[number - 1],
      value = stack.pop(),
      tempStack = [],
      nextStack;
    // move items from subsequent stacks forward to fill the gap
    if (number < this.stacks.length) {
      for (let i = number; i < this.stacks.length; ++i) {
        nextStack = this.stacks[i];
        // reverse next stack - we could actually use other operators in
        // JavaScript like shift or reverse to do this simpler but that would
        // be cheating
        while (nextStack.length > 0) {
          tempStack.push(nextStack.pop());
        }
        stack.push(tempStack.pop());
        while (tempStack.length > 0) {
          nextStack.push(tempStack.pop());
        }
        stack = nextStack;
      }
    }
    // drop any empty stacks at the end beyond the first one
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }

    return value;
  }
}
// =====================================================================================================================
// Another Way
// =====================================================================================================================
var SetOfStacks = function(capacity) {
  // implement as an array of stacks
  this.capacity = capacity;
  this.stackSet = [];
};

SetOfStacks.prototype.push = function(value) {
  if (this.stackSet.length === 0  || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
    var newStack = [];
    newStack.push(value);
    this.stackSet.push(newStack);
  } else {
    this.stackSet[this.stackSet.length - 1].push(value);
  }
};

SetOfStacks.prototype.pop = function() {
  if (this.numStack === 0) {
    return undefined;
  } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
    this.stackSet.pop();
  } 
  return this.stackSet[this.stackSet.length - 1].pop();
};

SetOfStacks.prototype.peek = function() {
  var currStack = this.stackSet[this.stackSet.length - 1];
  return currStack[currStack.length - 1];
};

SetOfStacks.prototype.isEmpty = function() {
  return this.stackSet.length === 0;
};

SetOfStacks.prototype.popAt = function(index) {
  return this.stackSet[index].pop();
};

/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.stackSet);

s.popAt(2);

console.log(s.stackSet);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.stackSet);


// Note: if stack not implemented as an array, would need to separately keep track of the depth 
// of each stack in an array