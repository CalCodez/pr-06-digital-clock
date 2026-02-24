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
	const passwordInput = getById('password-input');
	const loginButton = getById('login-btn');
	const password = '4787';
	const exitButton = getById('exit-btn');

	loginButton.addEventListener(click, () => {
		if (passwordInput.value === password && !loginPage.classList.contains(flexInactive)) {
			toggleClass(loginPage, flexInactive);
		} else {
			alert('Passcode Is Incorrect!');
		}
	});

	exitButton.addEventListener(click, () => {
		if (loginPage.classList.contains(flexInactive)) {
			toggleClass(loginPage, flexInactive);
		}
	});
}

login();
