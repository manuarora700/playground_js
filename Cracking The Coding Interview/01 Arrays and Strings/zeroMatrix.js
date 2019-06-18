/*
Aproach 1
1. Check matrix for any element which is zero
2. If found, set it to null
3. Traverse the matrix again to find null element, and set the entire row and col of null element to zero.

Time - O(N^4)
Space - O(1)

PS
To create array with specific lengths
  let rows = new Array(matrix.length),
    cols = new Array(matrix[0].length);

To fill them with true or false
  rows.fill(false);
  cols.fill(false);
*/

function zeroMatrix(matrix) {
  // Find all zeros and set them to null

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][j] = null;
        break;
      }
    }
  }

  //Convert rows and columns containing nulls to zero.
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === null) {
        nullifyRow(matrix, i);
        nullifyCol(matrix, j);
        break;
      }
    }
  }
  return matrix;
}

function nullifyRow(matrix, i) {
  for(let j = 0; j < matrix[0].length; j++) {
    matrix[i][j] = 0;
  }
}

function nullifyCol(matrix, j) {
  for(let i = 0; i < matrix.length; i++) {
    matrix[i][j] = 0;
  }
}
matrix = [
  [1, 2, 0, 3], 
  [4, 0, 5, 6], 
  [9, 10, 11, 12]
  ];

zeroMatrix(matrix);


/*
Approach 2
1. Used Row and Col arrays to check the posotion of values where i and jth element is zero
2. Then we traverse through this array of row and array of column to check if the value is true; if true
then we call nullifyrow and nullify col respectively.

Time - O(N^3)
Space - O(N + M);
*/

function zeroMatrix(matrix) {
  // Find all zeros and set them to null

  let row = [];
  for(let k = 0; k < matrix.length; k++) {
    row[k] = false;
  }
  let col = [];
   for(let k = 0; k < matrix[0].length; k++) {
    col[k] = false;
  }


  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
        break;
      }
    }
  }
  //Convert rows and columns containing nulls to zero.
  for(let i = 0; i < row.length; i++) {
    if(row[i]) nullifyRow(matrix, i);
  }
  for(let j = 0; j < col.length; j++) {
    if(col[j]) nullifyCol(matrix, j);
  }  
  return matrix;
}

function nullifyRow(matrix, i) {
  for(let j = 0; j < matrix[0].length; j++) {
    matrix[i][j] = 0;
  }
}

function nullifyCol(matrix, j) {
  for(let i = 0; i < matrix.length; i++) {
    matrix[i][j] = 0;
  }
}
matrix = [
  [1, 2, 0, 3], 
  [4, 0, 5, 6], 
  [9, 10, 11, 12]
  ];

zeroMatrix(matrix);

// ================================================================================================
//  Best approach

'use strict';

/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrix(matrix) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length),
    cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
}