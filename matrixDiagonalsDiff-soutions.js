// Given a square matrix (an array of arrays),
// calculate the absolute difference
// between the sums of its diagonals.

const squareMatrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const absoluteDiff = (matrix) => {
  let n = matrix.length;
  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let i = 0; i < n; i++) {
    firstDiagonal.push(matrix[i][i]);
    secondDiagonal.push(matrix[i][n - 1 - i]);
  }
  let sum1 = firstDiagonal.reduce((acc, val) => acc + val, 0);
  let sum2 = secondDiagonal.reduce((acc, val) => acc + val, 0);
  let absoluteValue = Math.abs(sum1 - sum2);
  return absoluteValue;
};

console.log(absoluteDiff(squareMatrix));
