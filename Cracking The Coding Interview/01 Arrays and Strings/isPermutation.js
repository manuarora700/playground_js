/*
My approach -- Build hashmaps for both the strings and check if each character has equal count in the other map
Time: O(N+M);
Space: O(N);
*/
function isPermutation(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  let map1 = buildMap(str1);
  let map2 = buildMap(str2);
  
  for(let i in map1) {
    if(map1[i] !== map2[i]) {
      return false;
    }
  }
  return true;
}

function buildMap(str) {
  let map = {};
  for(let i = 0; i < str.length; i++){
    let element = str[i];
    if(map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  }
  return map;
}

str1 = "abbababbabbabacb";
str2 = "abbababbabbababc";
isPermutation(str1, str2);

/*
Other approach is to sort the strings and see if theyre equal or not
Time: O(NlogN + MLogM)
Space: O(1)
*/

function isPermutation(str1, str2) {
  if(str1.length !== str2.length)
    return false;

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  if(str1 !== str2) {
    return false;
  }
  return true;
}
str1 = "abbababbabbabacb";
str2 = "abbababbabbababb";
isPermutation(str1, str2);