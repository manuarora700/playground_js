// Implement a BST with Node class and BST class. Implement insert(), lookup() and delete() methods.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {}
  lookup(value) {}
  remove(value) {}
}


const bst = new BST();


// Traversal function to traverse a BST

function traverse(node) {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(tree.left);
  tree.right = node.right === null ? null : traverse(tree.right);
  return tree;
  
}