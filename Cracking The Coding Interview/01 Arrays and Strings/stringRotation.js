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

// Approach 2
/*
1. copy s1 twice; i.e. s3 = s1 + s1;
2. check if s2 is a substring of s3

Eg s1 = "manupaaji"
	s2 = "paajimanu"
	s3 = s1+s2 ==> "manupaajimanupaaji";

	check if s2 is a substring of s3 If yes then return true else return false;
	Much better solution
Tiime O(N) because string comparision takes linear time
Space O(N);
*/
let stringRotate = function(s1, s2) {
let s3 = s1+s1
console.log(s3);

if(!s1 || !s2) return false;
if (s1.length !== s2.length) return false;

return s3.includes(s2);

}


s1 = "manupaaji";
s2 = "paajimanu";
stringRotate(s1, s2)
