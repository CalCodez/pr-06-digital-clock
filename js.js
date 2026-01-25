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

const dateDisplay = getById('dateDisplay');
const hourDisplay = getById('hourDisplay');
const minuteDisplay = getById('minuteDisplay');
const secondsDisplay = getById('secondsDisplay');

function showDate(display) {
	const today = new Date();
	const region = 'en-US';
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
	textContent(display, today.toLocaleDateString(region, options));
}
showDate(dateDisplay);

function showTime(h, m, s) {
	setInterval(() => {
		const time = new Date();
		textContent(h, time.getHours());
		textContent(m, time.getMinutes());
		textContent(s, time.getSeconds());
		// console.log(time.getHours());
	}, 1000);
}
showTime(hourDisplay, minuteDisplay, secondsDisplay);
