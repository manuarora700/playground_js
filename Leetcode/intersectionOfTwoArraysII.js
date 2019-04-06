// 350. Intersection of Two Arrays II
// Easy

// 643

// 226

// Favorite

// Share
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    if(nums1 === null || nums2 === null) return null;
    for(let i = 0; i < nums1.length; i++) {
      for(let j = 0; j < nums2.length; j++) {
        if(nums1[i] === nums2[j]) {
          result.push(nums1[i]);
          nums1.splice(i,1);
          nums2.splice(j,1);
          i = i - 1;
          j = j - 1;
        }
      }
    }
    return result;
};