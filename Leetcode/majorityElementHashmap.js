// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2
var majorityElement = function(nums) {
    let map = {};
    let length = nums.length;
    let maxElement = nums[0];
    // Populate map object
    for(let i = 0; i < length; i++) {
        let currentNumber = nums[i];
        if(!map[currentNumber]) {
            map[currentNumber] = 1;
        } else {
            map[currentNumber] += 1;
        }
        // Checking occurences of max element
        if(map[currentNumber] > map[maxElement]) {
          maxElement = currentNumber;
        }
    }
    
    if(map[maxElement] > length/2) {
        return maxElement;
    }
    
};