// 905. Sort Array By Parity
// Easy

// 466

// 52

// Favorite

// Share
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if(A.length === 1) {
        return A;
    }
    let odd = [];
    let even = [];
    let result = [];
    for(let i = 0; i < A.length; i++) {
        if(A[i]%2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    for(let i in even) {
        result.push(even[i]);
    }
    for(let i in odd) {
        result.push(odd[i]);
    }
    return result;
};