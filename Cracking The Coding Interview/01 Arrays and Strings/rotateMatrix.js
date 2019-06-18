/*
Simply copy and paste the elements from matrix into the resultant matrix. Uses addition space and not in place solution.
Time - O(N^2)
Space - O(N^2);
*/
function rotate(matrix) {

  // lil comples method to initialize a 2d array with n rows and columns
  let length = matrix[0].length;
  let result = [];

  // Initialize a 2d array of size n
  for(let i = 0; i <length; i++ ) {
    result.push([]);
  }

  // ith and jth element in result matrix = (length - j - 1)th and ith element in matrix. Copy and paste. This isnt in place solution.
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      result[i][j] = matrix[length - j - 1][i];
    }
  }  
  return result;
}

matrix = [[1, 2, 3,4], [5, 6, 7, 8],[9, 10, 11, 12], [13,14,15,16]];

rotate(matrix);