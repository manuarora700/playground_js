// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Brute force -- using 2 for loops O(n^2)


// Brute force using sorting -- o(n)
var containsDuplicate = function(nums) {
    
    nums.sort(function(a,b) {
        return a-b;
    });
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) return true;
    }
    return false;
};


// Using HashTable in js

var containsDuplicate = function(nums) {
    
    let hashTable = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(hashTable[nums[i]]) {
            return true;
        } else {
            hashTable[nums[i]] = 1;
        }
    }
    return false;
};

// Using sets() in JS
var containsDuplicate = function(nums) {
    
    let set = new Set(nums);
    return set.size < nums.length;
    
};