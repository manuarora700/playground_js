/**
 * @param {number[]} nums
 * @return {boolean}

 Time O(N^2)
 Space O(N)
 */
var canJump = function(nums) {
    let dpPositions = new Array(nums.length).fill(false);
    dpPositions[0] = true;
    
    for(let j = 1; j < nums.length; j++) {
        for(let i = 0; i < j; i++) {
            if(dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
            }
        }
    }
    return dpPositions[nums.length - 1];
};