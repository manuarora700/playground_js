/*
Approach 1 - Check the next value; if same then increase counter and keep iterating; if different then append
to the result and reset counter.
Fairly Straightforward.

Time - O(S + N^2) Because string concatenation operates on O(N^2) runtime.
Space - O(1)
*/

function stringCompression(string) {
  string = string.replace(/\s/g, '');

  let counter = 1;
  let compressedString = "";
  let j = 1;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[j]) {
      counter++;
      j++;
    } else {
      compressedString += string[i] + counter;
      counter = 1;
      j++;
    }
  }
  // if compressed string is not smaller than original string then return original string
  return compressedString.length < string.length ? compressedString : string;

}

string = "maaaanuuuupaaajjjji";
stringCompression(string);
