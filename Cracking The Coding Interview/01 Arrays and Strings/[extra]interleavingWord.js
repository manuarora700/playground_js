/**
Given an array of string and interleaved word, write a function to output the words in
array used to make a interleaved word.
StringArray : {"cat", "bat", "father", "mother"}
InterleavedWord : "fcaatther"
output : "father"
"cat"

Approach 1 
1. Create Interleaved word for each pair in the array of words.
2. This creation of interleaving words require taking each character at a time and appending it with the string.
3. Store the interleaved pair and the pair with which it was created in the hash table.

Time - O(N^3)
Space - O(N^2);
Kaafi mehnga sauda.
*/
function interleave(arr, s) {
  let mapper = {};
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      let s = createInterleaved(arr[i], arr[j]);
      mapper[s] = [arr[i], arr[j]];
    }
  }
  return mapper[s] || false;
}

function createInterleaved(string1, string2) {
  let s = "";
  let i = 0;

  while(i <= string2.length + string2.length) {
    if(string1[i] && string2[i]) {
      s = s + string1[i];
      s = s + string2[i];
      i++;
    }
    else if(string1[i]) {
      s = s + string1[i];
      i++;
    }
    else if(string2[i]) {
      s = s + string2[i];
      i++;
    } else {
      i++;
    }
    // s = s + string2[i];
    // i++;
  }
  // console.log(i);
  return s;
}

// string1 = "cat";
// string2 = "father";
// createInterleaved(string1, string2)
arr = ['cat', 'bat', 'father', 'mother', 'manu', 'paaji'];
s = "mpaanauji";
interleave(arr, s);