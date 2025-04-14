// Select elements
const message = document.getElementById('message');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const dynamicElementsContainer = document.getElementById('dynamicElementsContainer');

// Change text content
changeTextBtn.addEventListener('click', function() {
  message.textContent = 'The text has been dynamically changed!';
});

// Change CSS style
changeStyleBtn.addEventListener('click', function() {
  message.style.color = 'blue';
  message.style.fontSize = '24px';
  message.style.fontWeight = 'normal';
});

// Add a new element
addElementBtn.addEventListener('click', function() {
  const newElement = document.createElement('div');
  newElement.classList.add('new-element');
  newElement.textContent = 'This is a new dynamically added element!';
  dynamicElementsContainer.appendChild(newElement);
});

// Remove an element
removeElementBtn.addEventListener('click', function() {
  const elements = dynamicElementsContainer.getElementsByClassName('new-element');
  if (elements.length > 0) {
    dynamicElementsContainer.removeChild(elements[0]);
  } else {
    alert('No elements to remove!');
  }
});
