// String Parsing: Write a function
// that takes a string and returns an
// object where each word in the string
// is a key, and its value is the number
// of times that word appears in the string.

const string1 =
  "I don't know how many times I have to say it to you, but you already know that I love you.";

const numOfRepeatedWords = (str) => {
  const obj1 = {};
  const wordArr = str.split(' ')
  .map(word => word.replace(/[^a-zA-Z]/g, ''));
  wordArr.map((words) => {
    obj1[words] = (obj1[words] || 0) + 1;
  });
  return obj1;
};

console.log(numOfRepeatedWords(string1));
