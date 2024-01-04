const MY_API = 'https://jsonplaceholder.typicode.com/posts';

// async function main() {
//   const data = {
//     title: 'Goku',
//     body: 'Super Sayain',
//     userId: 69,
//   };

//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json; charset=UTF-8');

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers
//   }

//   try {
//     const response = await fetch(MY_API, options);
//     // console.log(response.headers.get('content-type'));

//     const obj = await response.json();
//     console.log(obj);
//     //////// This does the same thing... //////////
//     // const text = await response.text();
//     // console.log(JSON.parse(text));
//   } catch (error) {
//     console.error('Uh oh, ' + error);
//   }
// }

// main();

//////////////////////////////////////////////////////

// Now we want to take the user's input value (a name),
// and use that instead of our hard coded data, to send
// as a post.

// const form = document.querySelector('form');
// const fName = document.getElementById('fName');
// const lName = document.getElementById('lName');
// form.addEventListener('submit', onSubmit);

// async function onSubmit(event) {
//   event.preventDefault();

//   const data = {
//     title: fName.value,
//     body: lName.value,
//     // userId: `${Math.floor(Math.random() * 9)}`,
//     userId: 555,
//   };

//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json; charset=UTF-8');

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers,
//   };

//   try {
//     const response = await fetch(MY_API, options);
//     const obj = await response.json();
//     console.log(obj);
//   } catch (error) {
//     console.error('Uh oh, ' + error);
//   }
// }

// We could also pass the user input data from the form
// without sending it as JSON...

// const form = document.querySelector('form');
// form.addEventListener('submit', onSubmit);

// async function onSubmit(event) {
//   event.preventDefault();

//   const data = {
//     method: 'POST',
//     body: new FormData(form), // sends form values instead of JSON
//     // in `FormData`, the name of the form is going to be the key,
//     // and the user input is going to be the value.
//     //** The server must expect form data for this to work. **//
//   };

//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json; charset=UTF-8');

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers,
//   };

//   try {
//     const response = await fetch(MY_API, options);
//     const obj = await response.json();
//     console.log(obj);
//   } catch (error) {
//     console.error('Uh oh, ' + error);
//   }
// }


//////////////////////////////////////////////////


// document.addEventListener('DOMContentLoaded', (event) => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', onSubmit);
// });

// ** The 'DOMContentLoaded' event listener is good practice
// because it ensures that JavaScript runs only after the entire
// HTML document has been fully loaded and parsed. This is important
// because your JavaScript code is trying to access DOM elements
// like the form and input fields, which might not be available
// if the script runs before the HTML document is fully loaded.

// Without 'DOMContentLoaded'.......

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const formName = document.getElementById('fName');

  const data = {
    name: formName.value,
    data: {
      powers: 'telekinesis',
    },
  };

  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8');

  const url = 'https://api.restful-api.dev/objects';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log('Here is your id: ' + result.id); // We can now access properties of the results
  } catch (error) {
    console.error('Uh oh, ' + error);
  }
}
