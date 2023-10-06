// Here we are learning about the 'for...of' loop

// Written by ChatGPT

// Write a JavaScript function called countVowels that takes a string 
// as input and returns the count of vowels (a, e, i, o, u) in the string. 
// Use a for...of loop to iterate through the characters in the string.

// Here's a template to get you started:

function countVowels(str) {
    // Initialize a variable to count the vowels
    let vowelCount = 0;
  
    // Use a for...of loop to iterate through the characters in the string
    for (let char of str) {
      // Check if the character is a vowel and increment the count if it is
      // You can use an if statement or switch statement to check for vowels
    }
  
    // Return the total vowel count
    return vowelCount;
  }
  
  // Test cases
  console.log(countVowels("hello")); // Should print 2
  console.log(countVowels("programming is fun")); // Should print 5