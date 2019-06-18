/*
Approach 1
1. Find the occurence of first character in string 1 in the second string.
2. After finding the location of the first character, use another while loop to check if every next character is matching or not
3. Do this for s1.length
4. Main gotcha - s[i] === s[j%s2.length]

Time - O(N)
Space - O(1)
*/

let stringRotate = function(s1, s2) {
  let i = 0, j = 0;

  if(s1.length !== s2.length) return false;
  if(!s1 || !s2) return false;

  while(i < s1.length && j , s1.length) {
    if(s1[i] === s2[j]) {
      console.log("character found at ", i, j);
      break;
    } else {
      j++;
    }
  }

  while( i < s1.length) {
    if( s1[i] === s2[j%s2.length]) {
      i++;
      j++;
      console.log(i, j);
    } else {
      return false;
    }
  }
  return true;
}


s1 = "manupaaji";
s2 = "aajimanup";
stringRotate(s1, s2)