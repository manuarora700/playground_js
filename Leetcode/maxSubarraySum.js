// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Naive / Brute force approach

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    
    let bestSum = nums[0];
    let totalSum;
    
    for(let i = 0; i < nums.length; i++) {
        let totalSum = nums[i];
        if(totalSum > bestSum) bestSum = totalSum;
        
        for(let j = i+1; j < nums.length; j++) {
            totalSum = totalSum + nums[j];
            if(totalSum > bestSum) bestSum = totalSum;
        }
    }
    return bestSum;
}

