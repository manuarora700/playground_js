/**
 * @param {number} n
 * @return {number}
 Time - O(N)
 Space - O(N)

 Use array of ways, then its just fibonacci sequence
 */
var climbStairs = function(n) {
    // initial ways to climb the stairs
    let ways = [0,1,2,3];
    if(n <= 3) return n;
    
    for(let i = 4; i <=n; i++) {
    	// Basic fibonacci sequence starting from index 4. because for 4 steps we have 5 ways which are 3+2
        ways.push(ways[i-1] + ways[i-2]);
    }
    
    return ways.pop();
};