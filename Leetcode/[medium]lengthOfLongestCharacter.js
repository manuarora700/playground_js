/**
 * @param {string} s
 * @return {number}
 */

/**
Approach: Sliding Window (Flexible size)
1. Create an empty hash table
2. Create windowStart and maxLength variables, set both of them to Zero.
3. Loop through the input string
    a. If the character is already in the hash map it means it is repeating, Update the windowStart to point to the index + 1 of the character
    b. If not repeating, set the value in the hash table
    c. Update max length to be the max of window size and already defined max
4. Return max

Time - O(n)
Space - O(max(m, n))
*/
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let windowStart = 0;
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++) {
        let endChar = s[i];
        
        if(map[endChar] >= windowStart) {
            // Duplicate character found.
            // Update windowStart 
            windowStart = map[endChar] + 1;
        }
        // if no duplicate, add to hashmap
        map[endChar] = i;
        
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
};