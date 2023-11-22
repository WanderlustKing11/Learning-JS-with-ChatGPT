const matrix = [
  [-9,-9,-9,1,1,1],
  [0,-9,0,4,3,2],
  [-9,-9,-9,1,2,3],
  [0,0,8,6,6,0],
  [0,0,0,-2,0,0],
  [0,0,1,2,4,0]
]

const hourglassSum = (arr) => {
  let maxSum = -Infinity;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] +
                arr[row + 1][col + 1] +
                arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
      if (sum > maxSum) {
        maxSum = sum;
      }                
    }
  }
  return maxSum;
}

console.log(hourglassSum(matrix));