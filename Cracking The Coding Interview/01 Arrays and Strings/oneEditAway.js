/*
Approach 1
Check individually for replacement and addition (Addition is same as deletion).
1. If string length difference > 1 return false;
2. if Strings are equal return true
3. If string length of both the strings are same check for replacement.
4. If string lengths differ by 1 then check for deletion (In this case) and find the one element which is to be deleted
Find greater and smaller strings and compute difference.
Time - O(N)
Space -O(1)
THIS IS TWO PASS
*/

function oneAway(firstString, secondString) {
  // Edge case checking
  if(firstString === secondString) return true;

  let greater, smaller;

  // Checking for replacement, if length of both are same
  if(firstString.length === secondString.length) {
    let replaceFlag = false;
    for(let i = 0; i < firstString.length; i++){
        if(firstString[i] !== secondString[i]) {
          if(replaceFlag) {
            return false;
          }
          replaceFlag = true;
        }
    }
    

    if(replaceFlag) return true;
  }
  // Checking for removal and addition
  // Figuring out which is greater in length
  if(firstString.length > secondString.length) {
    greater = firstString;
    smaller = secondString;
  } else {
    greater = secondString;
    smaller = firstString;
  }
  if(greater.length - smaller.length > 1) return false;
  
  if(greater.length - smaller.length === 1) {
    // check for removal from greater string
    let removeFlag = false;
    for(let i = 0; i < greater.length; i++) {
      if(greater[i] !== smaller[i]) {
          // console.log(greater[i], smaller[i]);        
        if(removeFlag) {
          return false;
        } 
        greater = greater.split("").splice(i, 1).join("");
        i = i - 1;
        removeFlag = true;
      }
    }
    if(removeFlag) return true;
  }
}
firstString = "Manu";
secondString = "Manx";
oneAway(firstString, secondString);