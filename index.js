const mainNode = document.getElementById('main');
mainNode.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
const yourName = "Aaron Johnson";
newHeader.textContent = `${yourName} is the champion`;

