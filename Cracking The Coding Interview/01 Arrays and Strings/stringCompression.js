/*
Approach 1 - Check the next value; if same then increase counter and keep iterating; if different then append
to the result and reset counter.
Fairly Straightforward.

Time - O(N)
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end.
    O(N^2) Because string concatenation operates on O(N^2) runtime in Java.
Space - O(N)
*/
// ==========================================================================================
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
// ==============================================================================================
/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = '';
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
    cStr += (i - start + 1) + char;
  }

  return cStr.length < str.length ? cStr : str;
}

// ================================================================================================
var strComp = function(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      console.log(currChar, string[i], i);
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');