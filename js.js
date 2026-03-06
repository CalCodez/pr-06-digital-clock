const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

function login() {
	const loginPage = getById('login-page');
	const password = '4787';
	const passWordLabel = getById('password-label');
	const passwordInput = getById('password-input');

	if (passwordInput.value === password) {
		toggleClass(loginPage, flexInactive);
	} else if (passwordInput.value === '') {
		passWordLabel.style.color = 'var(--accent-bright)';
		passWordLabel.style.transform = 'scale(1.3)';
		setTimeout(() => {
			passWordLabel.style.transform = 'scale(1)';
		}, 1000);
	} else if (passwordInput.value !== password) {
		passWordLabel.style.color = 'var(--accent-bright)';
		passWordLabel.style.transform = 'scale(1.3)';
		textContent(passWordLabel, 'Wrong Code Foo!');
		setTimeout(() => {
			passWordLabel.style.transform = 'scale(1)';
			textContent(passWordLabel, 'Enter The Damn Code');
		}, 1000);
		setTimeout(() => {
			passWordLabel.style.transform = 'scale(1.2)';
		}, 2000);
		setTimeout(() => {
			passWordLabel.style.transform = 'scale(1)';
		}, 3000);
	}
}
const loginButton = getById('login-btn').addEventListener(click, login);

const passwordInput = getById('password-input').addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		login();
	}
});
