// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
// Simple solution
// reverse an integer using x%10 and x/10 in while loop
// if negative number, multiply by -1 or use Math.sign()
// if Math.abs(x) > Math.pow(2, 31)
    
    let a = x.toString().split('')
    let num;
    if(a[0] == '-') {
        let c = a.shift()
        num = parseInt(c +a.reverse().join(''))
    } else {
       num = parseInt(a.reverse().join(''))
    }
    
    if(Math.abs(num) > Math.pow(2, 31)) {
        num = 0;
    }
    
    return num


}
