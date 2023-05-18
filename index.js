/* Fork, and then Clone the starter repository

Links to an external site. and navigate to the directory.

In the starter repository, an index.js file should already be present with an array of "users" including name, age, and occupation.

In your index.html, create a full HTML document with a single div with an ID of "root".

Inside your main() function, grab the "root" element, add an h1 element, give it text of "FREELANCERS", and append the HTML document.

Continue working inside your main() function to create an unordered list element.

Loop through the users array creating li elements. 

Append those elements to your HTML document.

Style your site using CSS. */

const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  // Retrieve the root element
  const rootElement = document.getElementById('root');

  // Create an h1 element
  const h1Element = document.createElement('h1');
  h1Element.textContent = 'FREELANCERS';

  // Append the h1 element to the root element
  rootElement.appendChild(h1Element);

  // Create an unordered list element
  const ulElement = document.createElement('ul');

  // Loop through the users array
  for (const user of users) {
    // Create a list item element
    const liElement = document.createElement('li');
    
    // Set the text content of the list item element
    liElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;

    // Append the list item element to the unordered list
    ulElement.appendChild(liElement);
  }

  // Append the unordered list to the root element
  rootElement.appendChild(ulElement);
}

// Call the main function
main();
