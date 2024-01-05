const { type } = require('os');

var x = 2;
function sum(arg) {
    return function() {
        let ans = arg + arg;
        return ans; // or console.log(ans) if you want to log it
    };
}
const gimme = sum(x);
console.log(gimme());

function checkReturnValue(func) {
  const result = func();
  if (typeof result === 'number') {
    console.log("This function is returning a number: " + result);
  } else {
    console.log("Error, not returning a number.");
  }
}

checkReturnValue(gimme);