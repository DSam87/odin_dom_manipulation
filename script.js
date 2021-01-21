const container = document.querySelector('#container');
const content = document.createElement('div');
const paragraph = document.createElement('p');
const contentTitle = document.createElement('h2');


content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

paragraph.classList.add('content');
paragraph.textContent="This is textContent added to my created p element in the DOM!";

contentTitle.classList.add('contentTitle');
contentTitle.textContent = "Section Title";

container.appendChild(content);
container.appendChild(paragraph);

container.insertBefore(contentTitle, container.firstChild);