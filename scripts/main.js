var myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/light.png');}
	else {
		myImage.setAttribute ('src','images/firefox-icon.png');}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName || myName === null) {
		setUserName();} 
	else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla is cool, ' + myName;}}

myButton.onclick = function() {
	setUserName();}


/* 
JS交學網址 https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics 
*/