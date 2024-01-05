function countVowels(str, countYAsVowel = true) {
    let vowelCount = 0;

    for (let char of str) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || (countYAsVowel && char === 'y')) {
        vowelCount += 1;
      }
    }
  
    return vowelCount;
  }
  
  // Test cases
  console.log(countVowels("hello")); // Should print 2
  console.log(countVowels("programming is fun")); // Should print 5
  console.log(countVowels("Jannuary")); // Should print 4 and counts 'y' as a vowel
  console.log(countVowels("Haymaker", false)); // Should print 3 because we do not count 'y' as a vowel