const container = document.querySelector('#container');
const content = document.createElement('div');
const paragraph = document.createElement('p');
const redParagraph = document.createElement('p');
const contentTitle = document.createElement('h2');

const head3Title = document.createElement('h3');
head3Title.style.color= "blue"
head3Title.textContent="I'm a blue h3!";
container.appendChild(head3Title);



redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);


content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

paragraph.classList.add('content');
paragraph.textContent="This is textContent added to my created p element in the DOM!";



contentTitle.classList.add('contentTitle');
contentTitle.textContent = "Section Title";

container.appendChild(content);
container.appendChild(paragraph);

container.insertBefore(contentTitle, container.firstChild);

const divCreation = document.createElement('div');
divCreation.style.cssText="border:solid 2px black; background: pink;";
container.appendChild(divCreation);

const h1Div = document.createElement('h1');
const anotherP = document.createElement('p');

h1Div.textContent="I'm in a div";
anotherP.textContent="ME TOO!";


divCreation.appendChild(h1Div);
divCreation.appendChild(anotherP);

