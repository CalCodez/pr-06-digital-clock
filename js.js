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
		type: 'Major Depressive Disorder',
		subTittle: 'Clinical Depression',
		href: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
		state1: null,
		state2: 'Symptoms typically last 2 week and affect daily functioning.',
		signs: ['Sad Mood', 'No Interest', 'Low Energy'],
	},
	{
		type: 'Persistent Depressive Disorder',
		subTittle: 'Dysthymia,',
		href: 'https://www.mayoclinic.org/diseases-conditions/persistent-depressive-disorder/symptoms-causes/syc-20350929',
		state1: 'A long-term, chronic form of depression lasting 2 years or more.',
		state2: 'Symptoms are usually less sever than major depression but longer lasting',
		signs: ['Long-term Sadness', 'Low -self-worth', 'Tired Often'],
	},

	{
		type: 'Bipolar Disorder ',
		subTittle: 'Depressive Episodes',
		href: 'https://www.webmd.com/bipolar-disorder/depression-symptoms',
		state1: 'People experience cycles of depression and mania/hypomania',
		state2: 'Mani phases involve elevated mood, impulsivity, and high energy',
		signs: ['Deep Sadness', 'No Motivation', 'Poor Sleep'],
	},

	{
		type: 'Seasonal Affective Disorder',
		subTittle: 'SAD',
		href: 'https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651',
		state1: 'Depression that occurs seasonally, ofter during winter',
		state2: null,
		signs: ['Seasonal Sadness', 'Low Energy', 'Oversleeping'],
	},

	{
		type: 'Postpartum Depression',
		subTittle: null,
		href: 'https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617',
		state1: 'Depression that occurs during pregnancy or after childbirth',
		state2: null,
		signs: ['Mood Swings', 'Bonding Issues', 'Extreme Tiredness'],
	},
	{
		type: 'Premenstrual Dysphoric Disorder',
		subTittle: 'PMDD',
		href: 'https://womenshealth.gov/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pm',
		state1: 'A sever form of premenstrual mood disorder',
		state2: null,
		signs: ['Mood Swings', 'Irritability', 'Anxiety'],
	},

	{
		type: 'Atypical Depression',
		subTittle: null,
		href: 'https://my.clevelandclinic.org/health/diseases/21131-atypical-depression',
		state1: 'A subtype of major depression with different symptom patterns',
		state2: null,
		signs: ['Mood Lifts Briefly', 'More Eating', 'More Sleeping'],
	},

	{
		type: 'Psychotic Depression',
		subTittle: null,
		href: 'https://www.nhs.uk/mental-health/conditions/psychotic-depression/',
		state1: 'Severe depression with psychotic symptoms.',
		state2: null,

		signs: ['Sever Sadness', 'Hallucinations', 'Paranoia'],
	},

	{
		type: 'Situational Depression',
		subTittle: 'Adjustment Disorder with Depressed Mood',
		href: 'https://www.webmd.com/depression/situational-depression',
		state1: 'Triggered by a specific stressful life event',
		state2: 'Common triggers include loss, divorce, job loss, or trauma',
		signs: ['Event-related Sadness', 'Crying', 'Trouble Coping'],
	},

	{
		type: 'Fuck Shit',
		subTittle: 'Memory Lane',
		href: '#',
		signs: ['Low Mood', 'Low Energy', 'Loss of interest'],

		state1: `There is a common fact about life I think every human can agree with... And that is Everybody go through shit. That's Life.`,
		state2: `However, there are some humans in life that life goes through them... and it's NOT normal. What does that mean...? Dive Deeper?`,

		signs: ['Personal Stories', 'Videos', 'Rants'],
	},
];

function createTypeCard(obj) {
	const depressionCardsContainer = getById('depression-cards-container');
	const depressionCard = createElement('div');
	const typeName = createElement('h4');
	const viewMoreBtn = createElement('a');
	const statementContainer = createElement('div');
	const depressionCardBtnContainer = createElement('div');

	const typeSignHolder = [];

	for (let i = 0; i < 3; i++) {
		typeSignHolder.push(createElement('li'));
	}

	textContent(typeSignHolder.at(0), obj.signs.at(0));
	textContent(typeSignHolder.at(1), obj.signs.at(1));
	textContent(typeSignHolder.at(2), obj.signs.at(2));

	addClass(depressionCard, 'depression-card');
	addClass(depressionCard, 'container');

	if (obj.subTittle != null) {
		const subTittle = createElement('span');

		textContent(subTittle, obj.subTittle);

		addClass(subTittle, 'container');
		addClass(subTittle, 'subTittle-span');

		appendChild(depressionCard, subTittle);
	}

	if (obj.state1 != null) {
		const statement1 = createElement('p');
		appendChild(statementContainer, statement1);
		textContent(statement1, obj.state1);
	}
	if (obj.state2 != null) {
		const statement2 = createElement('p');
		appendChild(statementContainer, statement2);
		textContent(statement2, obj.state2);
	}

	addClass(typeName, 'depression-type-name');
	addClass(viewMoreBtn, 'cta-btn');
	addClass(statementContainer, 'statement-container');
	addClass(statementContainer, 'container');
	addClass(depressionCardBtnContainer, 'depression-card-btn-container');
	addClass(depressionCardBtnContainer, 'container');

	appendChild(depressionCard, typeName);

	for (let sign of typeSignHolder) {
		appendChild(depressionCard, sign);
		addClass(sign, 'type-sign');
	}

	appendChild(depressionCardBtnContainer, viewMoreBtn);
	appendChild(depressionCardBtnContainer, statementContainer);
	appendChild(depressionCard, depressionCardBtnContainer);

	textContent(typeName, obj.type);
	textContent(viewMoreBtn, 'View More');

	viewMoreBtn.href = obj.href;
	viewMoreBtn.target = '_blank';
	appendChild(depressionCardsContainer, depressionCard);
}

depressionObj.forEach((type) => {
	createTypeCard(type);
});
