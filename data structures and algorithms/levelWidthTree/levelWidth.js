// Given the root node of a tree, return an array where each 
// element is the width of the tree at each level
// Example:
//     	   0			width: 1
//  	/  |  \
//		1  2  3			width: 3
//      |  |  |
//      4     5			width: 2

// Output: [1, 3, 2]

function levelWidth(root) {
	// array to loop over tree
	const arr = [root, 's'];
	//counter to check for widths
	const counter = [0];

	// Check if there are atleast 2 elements to avoid infinite loop
	while(arr.length > 1) {
		//POP OUT THE FIRST ELEMENT
		const node = arr.shift();

		//check if 's' is the last character - if YES it means we have traversed the whole breadth with BF traversal
		// So we 1. push all the children to the array 2. Initialize next counter with value 0 which signifies next width value
		if(node === 's') {
			counters.push(0);
			arr.push('s');
		} else {
			// Increase counter and push all children until we get an 's'
			arr.push(...node.children);
			counters[counters.length -1] + 1;
		}
	}

	return counters;

}


module.exports = levelWidth;