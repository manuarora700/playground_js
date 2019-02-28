// Implement Node class to create a Binary Search Tree (BST)
// It should Initialize left, data and right values. 
// Also, Implement insert() method which accepts an argument 'data'.
// Insert data in the tree according to the BST specifications.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && this.left) {
			// recursively call insert() on left subtree
			this.left.insert(data);
		} else if(data < this.data) {
			// create a new node here
			this.left = new Node(data);
		}
		// repeat with right tree
		else if(data > this.data && this.right) {
			// recursively call insert() on right subtree
			this.right.insert(data);
		}else if(data > this.data) {
			this.right = new Node(data);
		}
	}
}

let node = new Node(32);


module.exports = Node;