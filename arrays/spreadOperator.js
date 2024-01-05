// Here's a brief overview of how the spread operator works:

// 1. Spreading Elements in Arrays:
// You can use the spread operator to expand an array 
// into its individual elements. This is often used for 
// concatenating arrays or passing the elements of one 
// array as arguments to a function.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2]; // Combines the elements of both arrays

// 2. Copying Arrays:
// You can create a shallow copy of an array using the spread operator. 
// This is useful when you want to duplicate an array without 
// modifying the original.

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray]; // Creates a copy of the original array

// 3. Spreading Elements in Function Calls:
// The spread operator is often used to pass individual
//  array elements as arguments to a function.

// function add(a, b, c) {
//     return a + b + c;
//   }
  
//   const numbers = [1, 2, 3];
//   const sum = add(...numbers); // Equivalent to add(1, 2, 3)
  
// 4. Spreading Object Properties:
// You can spread the properties of one object into another object,
//  creating a new object that combines their properties.

// const obj1 = { name: "John" };
// const obj2 = { age: 30 };
// const combinedObject = { ...obj1, ...obj2 }; // Combines the properties of both objects

// Challenge:
// Write a JavaScript function called combineArrays 
// that takes any number of arrays as arguments and returns 
// a new array that combines all the elements from the input arrays. 
// Use the spread operator to achieve this.

// Here's a template to get you started:

function combineArrays(...arrays) {
    // Use the spread operator to combine all elements from the input arrays into a new array
  }
  
  // Test cases
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  
  const combinedArray = combineArrays(arr1, arr2, arr3);
  console.log(combinedArray); // Should print [1, 2, 3, 4, 5, 6, 7, 8, 9]
  