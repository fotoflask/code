const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const signUpButton2 = document.getElementById('signUp2');
const signInButton2 = document.getElementById('signIn2');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	// document.getElementById('container2').classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	// document.getElementById('container2').classList.remove("right-panel-active");
});

signUpButton2.addEventListener('click', () => {
	console.log('Yes1');
	container2.classList.add("right-panel-active");
});

signInButton2.addEventListener('click', () => {
	console.log('Yes1');
	container2.classList.remove("right-panel-active");
});
