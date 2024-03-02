// Write your code here!

const mainNode = document.getElementById('main');
mainNode.parentNode.removeChild(mainNode);


const newHeader = document.createElement("h1")
newHeader.setAttribute('id', 'victory')
newHeader.textContent = `teb is the champion`
ocument.body.appendChild(newHeader);