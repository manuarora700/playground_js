// Given 2 arrays, create a function that lets a user know(true/false) 
// whether the two arrays contain any common elements.
// Example:
// arr1 = [1,2,3];
// arr2 = [5,6,7];
// returns FALSE.


function commonElements(arr1, arr2) {
	// Brute force
	for(let i = 0; i < arr1.length; i++) {
		for(let j = 0; j < arr2.length; j++) {
			if(arr1[i] === arr2[j]) {
				console.log("Indices of common element: ", i, j);
				return true;
			}
		}
	}

	return false;

}

commonElements([1,2,3,4,5],[6,7,4,5,6,3]);
