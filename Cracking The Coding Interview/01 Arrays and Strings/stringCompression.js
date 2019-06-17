/*
Approach 1 - Check the next value; if same then increase counter and keep iterating; if different then append
to the result and reset counter.
Fairly Straightforward.

Time - O(S)
Space - O(1)
*/

function stringCompression(string) {
  string = string.replace(/\s/g, '');

  let counter = 1;
  let result = "";
  let j = 1;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[j]) {
      counter++;
      j++;
    } else {
      result += string[i] + counter;
      counter = 1;
      j++;
    }
  }
  return result;

}

string = "maaaanuuuupaaajjjji";
stringCompression(string);
