const person = {
  // Define the properties and methods of the 'person' object here
  name: 'Darth Vader',
  greet: function () {
    console.log("Hello, " + this.name + ". Welcome!");
  },
};

// Call the 'greet' method to greet the person

person.greet();
