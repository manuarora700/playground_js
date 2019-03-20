// Implement a BST with Node class and BST class. Implement insert(), lookup() and delete() methods.
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;

  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          //LEFT SUBTREE
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        else {
          // RIGHT SUBTREE
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } 
      else if(value > currentNode.value) {
        currentNode = currentNode.right;
      }
      else if(value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }
  remove(value) {}
}


const tree = new BST();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(1); // returns leaf node 1 -- lookup working
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170


// Traversal function to traverse a BST

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;

}