function hasProperty(object, propertyKey) {
    // Use the 'in' operator to check if the propertyKey exists in the object
    // Return true if it exists, false otherwise

    //initial answer:

    // if (propertyKey in object) {
    //   return true;
    // } else {
    //   return false;
    // }

    // refactored answer:
    return propertyKey in object;
  }
  
  // Test cases
  const person = {
    name: "Alice",
    age: 25,
  };
  
  console.log(hasProperty(person, "name")); // Should return true
  console.log(hasProperty(person, "city")); // Should return false
  console.log(hasProperty(person, "age")); // Should return true
  console.log(hasProperty(person, "height")); // Should return false
  