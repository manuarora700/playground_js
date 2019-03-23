// Reverse a given string RECURSIVELY.


function stringReverseRecursively(str) {
	// code here
	if (str === "") {
    return "";
  	} else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

stringReverseRecursively("Hello Paaji");