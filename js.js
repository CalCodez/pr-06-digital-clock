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

const password = '4787';

const loginPage = getById('login-page');
const loginButton = getById('login-btn');
const passwordInput = getById('password-input');
const loginPageActive = 'loginActive';
const sideNavBar = getById('side-nav-bar');
const loginForm = getById('login-form');
const exitLogin = getById('exit-login');

function validLogin() {
	loginButton.addEventListener(click, () => {
		if (passwordInput.value === password && !loginPage.classList.contains(loginPageActive)) {
			toggleClass(loginPage, loginPageActive);
			toggleClass(loginForm, flexInactive);

			setTimeout(() => {
				toggleClass(sideNavBar, flexInactive);
			}, 400);
		}

		exitLogin.addEventListener(click, () => {
			if (loginPage.classList.contains(loginPageActive)) {
				toggleClass(loginPage, loginPageActive);
				toggleClass(sideNavBar, flexInactive);

				setTimeout(() => {
					toggleClass(loginForm, flexInactive);
				}, 300);
			}
		});
	});
}

validLogin();
