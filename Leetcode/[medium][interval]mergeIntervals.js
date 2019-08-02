/**
 * @param {number[][]} intervals
 * @return {number[][]}
 Time O(nlogn)
 Space O(1)
 */
var merge = function(intervals) {
    if(!intervals.length) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const res = [intervals[0]];
    
    for(let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastInterval = res[res.length - 1];
        
        if(currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
        } else {
            res.push(currentInterval);
        }
    }
    return res;
};