
// My solution using loop:

function combineArrays(...arrays) {
  const combinedArray = [];
  arrays.forEach((arr) => {
    combinedArray.push(...arr);
  });
  return combinedArray;
}

// solution 2 using the `concat` method:

// function combineArrays(...arrays) {
//   const mergedArray = [].concat(...arrays);
//   return mergedArray;
// }
  

// Test cases
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combinedArray = combineArrays(arr1, arr2, arr3);
console.log(combinedArray); // Should print [1, 2, 3, 4, 5, 6, 7, 8, 9]