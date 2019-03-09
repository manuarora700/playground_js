// O(n) approach using Hash Table (Objects)

function firstRecurringCharacter(arr) {
  let map = {};

  for(let i = 0; i < arr.length; i++) {
    if(map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = 1;
  }

}

firstRecurringCharacter([1,2,3,4,5,6,7,6,7,8,4,3,5]);