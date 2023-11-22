// A matrix in JavaScript can be 
// represented as an array of arrays. 
// Key operations might include:

// Creating a Matrix: 
// let matrix = [[1, 2], [3, 4]];
// Accessing Elements: 
// let element = matrix[0][1]; // Accesses 2
// Iterating Over a Matrix: 
// Nested loops or array methods.

// Matrix Operation: Write a function 
//  to transpose a matrix 
//  (swap rows with columns).

// Example:
// Input:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// Output:
// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]

// Somehow I want to take each index[n] from each array, and push them into their own array.

// Here's a step-by-step approach to transpose a matrix:

// Initialize a New Matrix: 
// Create a new matrix (array of arrays) 
// that will hold the transposed values. 
// Its dimensions will be the inverse of 
// the original matrix (number of columns 
// becomes the number of rows and vice versa).

// Nested Loops: 
// Use a nested loop to iterate through each 
// element. The outer loop will iterate over 
// each column of the original matrix, and 
// the inner loop will iterate over each row.

// Push Elements: 
// In each iteration of the inner loop, 
// push the element into the correct position 
// in the new matrix.

let matrixEx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const transposeMatrix = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let transposed = [];

  for (let col = 0; col < cols; col++) {
    let newRow = [];
    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][col]);
    }
    transposed.push(newRow);
  }
  return transposed;
}

console.log(transposeMatrix(matrixEx));