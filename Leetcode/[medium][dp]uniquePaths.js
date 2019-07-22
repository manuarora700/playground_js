/**
 * @param {number} m
 * @param {number} n
 * @return {number}

 BOTTOM UP DP APPROACH
 Time O(n*m)
 Space O(n*m)
 */
var uniquePaths = function(m, n) {
    let dpMatrix = [];
    
    for(let row = 1; row <= n; row++) {
        dpMatrix.push([]);
    }
    // Fill row with 1
    for(let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1;
    }
    // Fill col with 1
    for(let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1;
    }
    
    // Fill appropriate values, Add top value and left value at the current cell
    // Dont take row 1 and col 1 into consideration
    for(let row = 1; row < n; row++) {
        for(let col = 1; col < m; col++) {
            dpMatrix[row][col] = dpMatrix[row-1][col]
                               + dpMatrix[row][col-1];
        }
    }
    return dpMatrix[dpMatrix.length - 1][m - 1];
};