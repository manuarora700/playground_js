// Brute force
// Time: O(N^2)
// Space: O(1);
function isUnique(str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
str = "Manu   r";
isUnique(str);

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 */
function isUnique(str) {
  // sort string using quicksort
  str.sort(function(a,b) {
  	return a-b;
  });

  for (var i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

/*
Optimized
Build a hashmap and check if there occurs an element more than once. No need to build the map completely.
Time: O(N)
Space: O(N)
*/
function isUnique(str) {
	let map = {};
	for(let i = 0; i < str.length; i++) {
		let element = str[i];
		if(map[element]) {
			return false;
		}
		else {
			map[element] = 1;
		}
	}
	return true;
}

/*
Javascript specific - using Set(), Set() stores only unique characters.
Time: O(N)
Space: O(N)
*/
function isUnique(str) {
  let chars = new Set();

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}