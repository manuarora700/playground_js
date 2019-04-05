// Approach 2: Peak Valley Approach
// Algorithm

// Say the given array is:

// [7, 1, 5, 3, 6, 4].

// If we plot the numbers of the given array on a graph, we get:

// Profit Graph

// If we analyze the graph, we notice that the points of interest are the consecutive valleys and peaks.

// Mathematically speaking: Total Profit= \sum_{i}(height(peak_i)-height(valley_i)) TotalProfit=∑ 
// i
// ​	
//  (height(peak 
// i
// ​	
//  )−height(valley 
// i
// ​	
//  ))

// The key point is we need to consider every peak immediately following a valley to maximize the profit. In case we skip one of the peaks (trying to obtain more profit), we will end up losing the profit over one of the transactions leading to an overall lesser profit.

// For example, in the above case, if we skip peak_ipeak 
// i
// ​	
//   and valley_jvalley 
// j
// ​	
//   trying to obtain more profit by considering points with more difference in heights, the net profit obtained will always be lesser than the one obtained by including them, since CC will always be lesser than A+BA+B.


// Complexity Analysis

// Time complexity : O(n)O(n). Single pass.

// Space complexity : O(1)O(1). Constant space required. 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    let maxprofit = 0;
    
    while( i < prices.length - 1) {
        // First search for valley then search for peak
        while( i < prices.length - 1 && prices[i] >= prices[i+1]) {
            i++;
        }
        //After the above while loop -- valley found
        valley = prices[i];
        
        while( i < prices.length && prices[i] <= prices[i+1]) {
            i++;
        }
        // After the above while loop -- peak found
        peak = prices[i];
        
        maxprofit += peak - valley;
    }
    return maxprofit;
    
};