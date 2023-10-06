// The forEach loop and the map() function in JavaScript
// are both used to iterate over arrays and perform 
// actions on their elements, but they have different 
// purposes and behaviors:

// forEach Loop:
// - Purpose: It is used to iterate through an array and 
// execute a provided function for each element, with 
// the primary intention of performing side effects 
// (e.g., logging, modifying elements in-place).
// - Return Value: forEach does not return a new array. 
// It always returns undefined. It's used for its side 
// effects, and it's primarily used when you want to 
// perform an action for each element without creating 
// a new array.

// Example of forEach:

// const numbers = [1, 2, 3];
// numbers.forEach((num) => {
//   console.log(num * 2); // Log each doubled number
// });
// output:
// 2
// 4
// 6

// map() Function:
// - Purpose: It is used to iterate through an array and 
// apply a provided function to each element, generating 
// a new array of the same length with the results. 
// It's primarily used when you want to transform the 
// elements of an array into a new array without 
// modifying the original array.
// - Return Value: map() returns a new array with the results of the applied function for each element.
// Example of map():

// const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map((num) => num * 2); // Creates a new array
// console.log(doubledNumbers); // Output: [2, 4, 6]
// output: [ 2, 4, 6 ]

// Mapping Challenge:

// Write a JavaScript function that takes an array of 
// strings as input and returns a new array where each 
// string is capitalized (the first letter of each word 
// is in uppercase).

// For example:

// Input: ["hello world", "javascript is fun", "coding is great"]

// Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]

// Here's a basic outline of the challenge:

// 1. Create a function that takes an array as an argument.
// 2. Use the map() method to iterate over the array.
// 3. For each string in the array, split it into words.
// 4. Capitalize the first letter of each word.
// 5. Join the words back together into a string.
// 6. Return the resulting array.

