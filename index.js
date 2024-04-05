// Write your code here!

// Remove the main element with id 'main'
var mainElement = document.getElementById('main');
mainElement.remove();

// Create a new header element
var newHeader = document.createElement('h1');

// Set the id of the new header to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the new header
newHeader.textContent = 'Your Name is the champion'; // Replace 'Your Name' with your actual name

// Append the new header to the body of the document
document.body.appendChild(newHeader);