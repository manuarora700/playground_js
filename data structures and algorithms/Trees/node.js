// Implementation of a node

module.exports = class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	// add function to add a node
	add(data) {

	this.children.push(new Node(data));
	}
};