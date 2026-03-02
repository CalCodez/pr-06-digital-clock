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

function triggerLogin() {
	const goDeepButton = getById('go-deep-btn');
	const loginPage = getById('login-page');

	goDeepButton.addEventListener(click, () => {
		if (!loginPage.classList.contains(flexActive)) {
			toggleClass(loginPage, flexActive);
			console.log('Trigger 0');
		}
	});
}

triggerLogin();

function login() {
	const loginPage = getById('login-page');
	const passwordInput = getById('password-input');
	const loginButton = getById('login-btn');
	const password = '4787';
	const exitButton = getById('exit-btn');

	loginButton.addEventListener(click, () => {
		if (passwordInput.value === password) {
			toggleClass(loginPage, flexInactive);
			loginButton.href = './darkMemory.html';
			console.log('Trigger1');
		} else if (passwordInput.value === '') {
			alert('You Must Enter a passcode!!!');
		} else {
			alert('Passcode Is Incorrect!');
		}
	});

	passwordInput.addEventListener('keydown', (e) => {
		const passwordLabel = getById('password-label');

		if (e.key === 'Enter' && passwordInput.value === password) {
			loginButton.style.backgroundColor = 'var(--accent-bright)';
			loginButton.style.color = 'var(--accent)';
			loginButton.style.transform = 'scale(1.2)';
			setTimeout(() => {
				loginButton.style.transform = 'scale(1)';
				loginButton.style.backgroundColor = 'var(--accent)';
				loginButton.style.color = 'var(--project-color-dark)';
			}, 1000);
		} else if (e.key === 'Enter' && passwordInput.value === '') {
			passwordLabel.style.color = 'var(--accent-bright)';
			passwordLabel.style.transform = 'scale(1.2)';
			setTimeout(() => {
				passwordLabel.style.color = 'var(--font-color)';
				passwordLabel.style.transform = 'scale(1)';
			}, 1000);
		} else if (e.key == 'Enter' && passwordInput.value !== password) {
			passwordLabel.style.color = 'var(--accent-bright)';
			passwordLabel.style.transform = 'scale(1.2)';
			textContent(passwordLabel, 'Incorrect Code!!');
			setTimeout(() => {
				passwordLabel.style.color = 'var(--font-color)';

				passwordLabel.style.transform = 'scale(1)';
				textContent(passwordLabel, 'Enter The Damn Code');
			}, 2000);
		}
	});

	exitButton.addEventListener(click, () => {
		if (loginPage.classList.contains(flexActive)) {
			toggleClass(loginPage, flexActive);
			console.log('Trigger 2');
		}
	});
}

login();
