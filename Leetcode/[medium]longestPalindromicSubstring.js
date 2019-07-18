/**
 * @param {string} s
 * @return {string}
 */
/**
Time - O(n^2)
Space - O(1);

Approach: Expand Around Center
1. We make use of the helper function expandAroundMiddle where we pass left and right indices to an element
2. We then check the corresponding left and right indices, if theyre equal we decrement i and increment j to check if longer palindrome is possible.
3. We take into account the startIndex also to print at the end.
4. expandAroundMiddle(i - 1, i + 1) considers for odd length palindromes.
5. expandAroundMiddle(i, i+1) considers for even length palindromes.
*/
var longestPalindrome = function(s) {
    let startIndex = 0;
    let maxLength = 1;
    
    function expandAroundMiddle(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPathLength = right - left + 1;
            if(currentPathLength > maxLength) {
                maxLength = currentPathLength;
                startIndex = left;
            }
            left = left - 1;
            right = right + 1;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        expandAroundMiddle(i -1, i + 1);
        expandAroundMiddle(i, i+1);
    }
    return s.slice(startIndex, startIndex + maxLength);
};