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
// const loginButton = getById('login-btn').addEventListener(click, login);

// const passwordInput = getById('password-input').addEventListener('keydown', (e) => {
// 	if (e.key === 'Enter') {
// 		login();
// 	}
// });

const depressionObj = [
	{
		type: 'Major Depressive Disorder (Clinical Depression)',
		href: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
		state1: null,
		state2: 'Symptoms typically last 2 week and affect daily functioning.',
		signs: ['Sad Mood', 'No Interest', 'Low Energy'],
	},
	{
		type: 'Persistent Depressive Disorder (Dysthymia)',
		href: '',
		state1: 'A long-term, chronic form of depression lasting 2 years or more.',
		state2: 'Symptoms are usually less sever than major depression but longer lasting',
		signs: ['Long-term Sadness', 'Low -self-worth', 'Tired Often'],
	},

	{
		type: 'Bipolar Disorder (Depressive Episodes)',
		href: '',
		state1: 'People experience cycles of depression and mania/hypomania',
		state2: 'Mani phases involve elevated mood, impulsivity, and high energy',
		signs: ['Deep Sadness', 'No Motivation', 'Poor Sleep'],
	},

	{
		type: 'Seasonal Affective Disorder (SAD)',
		href: '',
		state1: 'Depression that occurs seasonally, ofter during winter',
		state2: null,
		signs: ['Seasonal Sadness', 'Low Energy', 'Oversleeping'],
	},

	{
		type: 'Postpartum Depression',
		href: '',
		state1: 'Depression that occurs during pregnancy or after childbirth',
		state2: null,
		signs: ['Mood Swings', 'Bonding Issues', 'Extreme Tiredness'],
	},
	{
		type: 'Premenstrual Dysphoric Disorder (PMDD)',
		href: '',
		state1: 'A sever form of premenstrual mood disorder',
		state2: null,
		signs: ['Mood Swings', 'Irritability', 'Anxiety'],
	},

	{
		type: 'Atypical Depression',
		href: '',
		state1: 'A subtype of major depression with different symptom patterns',
		state2: null,
		signs: ['Mood Lifts Briefly', 'More Eating', 'More Sleeping'],
	},

	{
		type: 'Psychotic Depression',
		href: '',
		state1: 'Severe depression with psychotic symptoms.',
		signs: ['Sever Sadness', 'Hallucinations', 'Paranoia'],
	},

	{
		type: 'Situational Depression (Adjustment Disorder with Depressed Mood)',
		href: '',
		state1: 'Triggered by a specific stressful life event',
		state2: 'Common triggers include loss, divorce, job loss, or trauma',
		signs: ['Event-related Sadness', 'Crying', 'Trouble Coping'],
	},

	{
		type: 'Common Signs (All Depression)',
		href: '',
		signs: ['Low Mood', 'Low Energy', 'Loss of interest'],
	},
];

const depressionNamesContainer = getById('depression-names-container');

function addTypeCard(obj) {
	const depressionNamesContainer = getById('depression-names-container');
	const typeContainer = createElement('div');
	const typeName = createElement('h4');
	const viewMoreBtn = createElement('a');
	const typeSignHolder = [];

	for (let i = 0; i < 3; i++) {
		typeSignHolder.push(createElement('p'));
	}

	addClass(typeContainer, 'depression-type-container');
	addClass(typeContainer, 'container');
	addClass(viewMoreBtn, 'cta-btn');

	addClass(typeName, 'depression-type');

	appendChild(depressionNamesContainer, typeContainer);
	appendChild(typeContainer, typeName);

	for (let sign of typeSignHolder) {
		appendChild(typeContainer, sign);
		addClass(sign, 'type-sign');
	}

	const [sign1, sign2, sign3] = typeSignHolder;
	textContent(sign1, obj.signs.at(0));
	textContent(sign2, obj.signs.at(1));
	textContent(sign3, obj.signs.at(2));

	appendChild(typeContainer, viewMoreBtn);

	textContent(typeName, obj.type);

	textContent(viewMoreBtn, 'View More');

	viewMoreBtn.href = obj.href;
	viewMoreBtn.target = '_blank';
}

depressionObj.forEach((type) => {
	addTypeCard(type);
});
