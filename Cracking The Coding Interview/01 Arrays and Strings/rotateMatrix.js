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

/**
 * Go through the matrix diagonally from 0,0 until half way through (one less
 * where odd N). For each diagonal starting point move through matrix along row
 * until length - starting index. For each index in the matrix go through all 4
 * sides moving items along one place.
 *
 * N = dimension of matrix
 * Time: O(N^2)
 * Additional space: O(1)
 *
 * @param  {array} matrix NxN matrix to rotate in place
 * @return {array}        Rotated matrix, same object as input
 */
export function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  if (matrix.length < 2) {
    return matrix; // no need to do anything to rotate a 1,1 matrix
  }

  let len = matrix.length - 1,
    half = Math.floor(matrix.length / 2);
  // loop through diagonal
  for (let start = 0; start < half; ++start) {

    // loop through x axis
    for (let i = 0; i < len - (start * 2); ++i) {
      let y = start,
        x = start + i,
        prev = matrix[y][x];

      // loop through all 4 corners
      for (let j = 0; j < 4; ++j) {
        let nextY = x,
          nextX = len - y,
          next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }
  }

  return matrix;
}

// ========================================================================================
var rotateMatrix = function(matrix) {
  var edge = matrix.length - 1;

  var movePixels = function(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel;

    // first transformation
    var toRow = row; // 0
    var toCol = col; // 1
    var toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log(i, j);
      movePixels(i, j);
    }
  }
};


/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

/*
var edge = n - 1;
pattern observed:
i) col value becomes row value
ii) row value is subtracted off edge and becomes col value
0100
0000
0000
0000
position of 1 -> m[0][1]
0000
0001
0000
0000
position of 1 -> m[1][edge]
0000
0000
0000
0010
position of 1 -> m[edge][edge - 1]
0000
0000
1000
0000
position of 1 -> m[edge-1][0]
0100
0000
0000
0000
position of 1 -> m[0][1]
flow of iteration:
i) start from top left corner and move diagonally down
ii) for each row, iterate pixels until edge - 1 
(pixel at edge would have been transformed by the first pixel)
iii) at each pixel iteration, iterate through 4 sides
iv) do iteration in place, i.e. store a temp pixel for moving things around
*/