var findDisappearedNumbers = function(nums) {
  const map = new Array(nums.length);
  map.fill(1);
  
  for (let i = 0; i < nums.length; i++) {
    map[nums[i] - 1]--;
  }
  
  const r = [];
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 1) r.push(i + 1);
  }
  
  return r;
};