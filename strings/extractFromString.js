const string = 'Hello 123, today is 45th May, 2021';
const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
const number = 42;
const data = {
  title: 'foo',
  body: 'bar',
  userId: 69,
}

function extractNums(str) {
  return str.split(/\D/);
}

function removeDupes(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.slice(arr[i], arr[i + 1]);
      i++;
    } else {
      i++;
    }
  }
  return arr;
}

// function isThisNumberEven(num) {
//   return Math. (num);
// }

async function letsFetch() {
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
  
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json));

  function proceed() {
    console.log('All the promises are done now!')
  }
}

console.log(proceed());
