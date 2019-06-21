/**
Approach - 1
1. Bubble sort the respective column element's row using two for loops

Time - O(N^2)
Space - O(1)
*/

function sortCol(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(j = i+1; j < matrix.length; j++) {
      console.log(matrix[i][1], matrix[j][1])
      if(matrix[i][1] > matrix[j][1]) {
        // swap rows
        let temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
      }
    }
  }
  return matrix;
}

let matrix = [
  [7,5,2,8],
  [2,6,5,9],
  [1,1,4,2],
  [0,3,5,9]
];

sortCol(matrix);