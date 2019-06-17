// Approach 1 -- Check for spaces, if found one then append %20 in the result string, else keep appending
// the characters

// Time - O(S)
// Space - O(S)

function urlify(string) {

  let stringResult=  "";
  for(let i = 0; i < string.length; i++) {
    if(string[i] === " ") {
      stringResult = stringResult + "%20";
    } else {
      stringResult += string[i];
    }
  }
  return stringResult;

}

string = "Manu Arora Nibba Paaji";
urlify(string);

//  Another method is using Javascript
// Split and join methods.
// Time - O(S)
// Space - O(S) -- Converting string into an array and then joining it back.

function urlify(string) {

  return string.split(" ").join("%20");

}


urlify("Paaji is fantastic");

// Some more fancy methods -_-
export function encodeSpaces(url) {
  if (!url || url.length === 0) {
    return url;
  }

  let spaceCount = 0;
  for (let i = 0; i < url.length; ++i) {
    if (url[i] === ' ') {
      ++spaceCount;
    }
  }

  // add an extra 2 characters for each space
  let newLength = url.length - 1 + 2 * spaceCount;
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    }
    else {
      url[j] = url[i];
    }
  }

  return url;
}

// One more, Just one
var urlify = function(str, length) {
  // have a pointer to check from start to end
  var strArr = str.split('');
  var pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      // *** needs more work here, a little wierd
      // not handling trailing spaces properly
      for (var i = str.length - 1; i > pointer + 3; i--) {
        strArr[i] = str[i - 2];
      }
      strArr[pointer] = '%';
      strArr[pointer+1] = '2';
      strArr[pointer+2] = '0';
      console.log(strArr, strArr.length);
    } 
    pointer++;
  }
  // if character is a space, move remainder chars by two
  // replace following three chars with '%20'
  return strArr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');