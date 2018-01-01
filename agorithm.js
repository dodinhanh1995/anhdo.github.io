var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool: ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	myHeading.textContent = 'Mozilla is cool: ' + localStorage.getItem('name');
}

myButton.onclick = function() {
	setUserName();
}