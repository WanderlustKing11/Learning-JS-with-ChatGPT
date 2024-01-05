
const arrayOfStrings = ["i am your father", "the force is strong with you", "this is the way"];

const capitalizeStrings = (arrayOfStrings) => {
  const modifiedArray = arrayOfStrings.map((str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  });

  console.log(modifiedArray);
}

capitalizeStrings(arrayOfStrings);