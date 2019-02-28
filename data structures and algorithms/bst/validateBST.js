//Validate a Binary Search Tree
// Given a node, Validate the bst, ensuring that 
// every node's left hand child is less than the parent node's value and 
// right child is greater than the parent

// Example:
//					 10
//				   /  	\
//				  0  	  12
//				 /  \ 	 /  \
//				-1   4  11   20
//				  \         /  \
// 			      -15      17   99  --- HERE -15 is at incorrect position so valudate(node) must return false
// Solution using recursion

function validate(node, min = null, max = null) {
	// Initialize with min and max value to pass on the info to next node value.

	if(max !== null && node.data > max) {
		return false;
	}
	if(min !== null && node.data < min ) {
		return null;
	}
	// check recursively if validate function returns true on min = null and max = node.data
	// This will go on the first statement and return false if matches
	if(node.left && !validate(node.left, min, node.data)) {
		return false;
	}
	if(node.right && !validate(node.right, node.data, max)) {
		return false;
	}
	return true;
}
