let y = 4;
const x = 2;
function update(arg) {
  return Math.random() + y * x;
}
y = 3;

const result = update(x);

console.log(result);