var x = 10;
let z = 5000;

function alpha() {
  let y = 200;
  console.log('alpha x: ' + x);
    function beta() {
      let m = 9000;
      function charlie() {
        console.log('charlie x + 10 = ' + (x + 10));
        console.log('charlie y + 22 = ' + (y + 22));
        console.log('charlie z + 999 = ' + (z + 999));
      }
      charlie();
    }
  beta();
}

// console.log('global y: ' + y);
// console.log('global m: ' + m);
alpha();