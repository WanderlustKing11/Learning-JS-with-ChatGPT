// Array Manipulation: Write a function 
// that takes an array of numbers and 
// returns a new array with each number 
// doubled.

const arrList = [1, 2, 3, 4];

const doubled = (arr) => {
  return arr.map((num) => num * 2);
}

console.log(doubled(arrList));