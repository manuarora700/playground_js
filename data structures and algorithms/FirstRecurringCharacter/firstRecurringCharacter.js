// Brute force O(n^2)
function firstRecurringCharacter(arr) {
  let map = {};

  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined; // No match
}

firstRecurringCharacter([1,2,3,4,5,6,7,6,7,8,4,3,5]);

// O(n) approach using Hash Table (Objects)

function firstRecurringCharacter(arr) {
  let map = {};

  for(let i = 0; i < arr.length; i++) {
    if(map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = 1;
  }
  return undefined; // No match
}

firstRecurringCharacter([1,2,3,4,5,6,7,6,7,8,4,3,5]);