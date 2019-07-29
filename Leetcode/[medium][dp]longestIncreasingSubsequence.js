// Time O(N^2)
// Space O(N)
// Approach - Use dynamic programming and follow a table method.


const lengthOfLIS = nums => {
    if(nums.length === 0) return 0;
    let dpArray = new Array(nums.length).fill(1);
    let maxSoFar = 1;
    
    for(let j = 0; j < nums.length; j++) {
        for(let i = 0; i < j; i++) {
            if(nums[j] > nums[i]) {
                dpArray[j] = Math.max(dpArray[i] + 1, dpArray[j]);
            }
        }
        
    maxSoFar = Math.max(maxSoFar, dpArray[j]);

    }
    
    return maxSoFar;
}