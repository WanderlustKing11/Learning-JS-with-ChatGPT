// Event listeners, and Garbage Collection

// use closure with this event listener so that we can
// keep count on button clicks

function attachEventListeners() {
  let count = 0;
  document.getElementById('clickMe')
  .addEventListener('click', function xyz() {
    console.log('clicked', ++count);
  });
}

attachEventListeners();

///////////////////////////////////////////////////


