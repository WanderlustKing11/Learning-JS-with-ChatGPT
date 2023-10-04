// The in keyword is used in JavaScript to check 
// if a particular property exists in an object. 
// It's often used to test whether an object has a 
// specific key. 

// Here's how it works:

// if (propertyKey in object) {
    // Code to execute if the propertyKey exists in the object
//   } else {
    // Code to execute if the propertyKey does not exist in the object
//   }

// propertyKey: This is the property or key you want to check for in the object.

// object: This is the object in which you want to check for the existence of the property.

// The in operator returns true if the propertyKey 
// exists as a property in the object, 
// and false otherwise.

// Here's a simple example:

// const person = {
//     name: "John",
//     age: 30,
//   };
  
//   if ("name" in person) {
//     console.log("The 'name' property exists in the person object.");
//   } else {
//     console.log("The 'name' property does not exist in the person object.");
//   }
// Should print  "The 'name' property exists in the person object."

// Now, here's a challenge to test your 
// understanding of the in operator:

// Challenge:
// Write a JavaScript function called hasProperty 
// that takes an object and a property name as arguments. The function should return true if the object has the specified property and false if it does not.

// Here's a template to get you started:

function hasProperty(object, propertyKey) {
    // Use the 'in' operator to check if the propertyKey exists in the object
    // Return true if it exists, false otherwise
  }
  
  // Test cases
  const person = {
    name: "Alice",
    age: 25,
  };
  
  console.log(hasProperty(person, "name")); // Should return true
  console.log(hasProperty(person, "city")); // Should return false
  