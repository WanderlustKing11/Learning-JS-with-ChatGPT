// The this keyword in JavaScript is a fundamental concept that refers to the current object or context within which code is executed. Its behavior can vary depending on how and where it's used, and it's often associated with functions and object-oriented programming.

// Here's an overview of how this works:

// 1. Global Context: When this is used in the 
// global context (outside of any function or object), 
// it refers to the global object. In a web browser, 
// this is typically the window object.

// 2. Function Context: Inside a function, 
// the value of this depends on how the function 
// is called:

// -In regular function calls, this typically 
// refers to the global object 
// (e.g., window in a browser).
// -In methods (functions attached to objects), 
// this refers to the object the method is called on.
// -In arrow functions, this retains the value 
// from the enclosing (surrounding) context.

// 3. Constructor Functions: When a function is 
// used as a constructor (with the new keyword), 
// this refers to the newly created instance of 
// the object.

// Here's a simple example to illustrate the concept:

// Global context
// console.log(this === window); // true

// Regular function
// function regularFunction() {
//   console.log(this === window); // true
// }
// regularFunction();

// Object method
// const obj = {
//   prop: 'Hello',
//   method: function() {
//     console.log(this.prop); // 'Hello'
//   }
// };
// obj.method();

// Constructor function
// function ConstructorFunction(value) {
//   this.value = value;
// }
// const instance = new ConstructorFunction('world');
// console.log(instance.value); // 'world'


// Challenge:
// Create a simple JavaScript object called 'person' with 
// the following properties and methods:

// -'name': A string representing the person's name.
// -'greet()': A method that logs a greeting message, 
// including the person's name, to the console using this.

// Use the object to greet the person by calling the greet method.

// Here's a template to get you started:

const person = {
    // Define the properties and methods of the 'person' object here
  };
  
  // Call the 'greet' method to greet the person
  