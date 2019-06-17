/*
Approach 1:
0. Remove spaces from the string and convert to lowercase
1. Build character map for every character in the string
2. Check if each character is an even number. If there is any odd number, the occurence of it should be not more than one.
If more than one odd characters are found then it is not a permutation of a palindrome.
4. Print output

Time - O(N)
Space - O(N)
*/
function isPalindromePermutation(string) {
  string = string.replace(/\s/g, '').toLowerCase();

  let table = buildFrequencyMap(string);
  console.log(table);
  return checkMaxOneOdd(table);
}

function buildFrequencyMap(string) {
  let map = {};
  for(let i = 0; i < string.length; i++) {
    let element = string[i];
    if(map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  }
  return map;
}

function checkMaxOneOdd(table) {
  let foundOdd = false;
  for(let i in table) {
    if(table[i] % 2 === 1) {
      if(foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }
  return foundOdd;
}

string = "Taco cat";
isPalindromePermutation(string);