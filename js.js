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

//**Toggle Mobile Menu */
function toggleMobileMenu() {
	const mobileMenuToggle = getById('mobile-menu-toggle');
	const mobileMenu = getById('mobile-menu');

	const mobileMenuActive = 'mobile-menu-active';

	const mobileMenuLinks = selectAll('.mobile-menu-links');

	mobileMenuToggle.addEventListener(click, () => {
		if (!mobileMenu.classList.contains(mobileMenuActive)) {
			toggleClass(mobileMenu, mobileMenuActive);

			for (let elm of mobileMenuLinks) {
				setTimeout(() => {
					elm.style.display = 'flex';
				}, 200);
			}
		} else {
			toggleClass(mobileMenu, mobileMenuActive);
			for (let elm of mobileMenuLinks) {
				elm.style.display = 'none';
			}
		}
	});
}

toggleMobileMenu();

//**Build Anchor Btn */
const buildAnchorTag = (tag, ref, parent) => {
	tag.href = ref;
	addClass(tag, 'cta-btn');
	textContent(tag, 'Learn More');
	tag.target = '_blank';
	appendChild(parent, tag);
};

//**Add Container Class */
const addContainerClass = (arr) => {
	for (let elm of arr) {
		addClass(elm, 'container');
	}
};

const depressionObj = [
	{
		type: 'Major Depressive Disorder',
		subtitle: 'Clinical Depression',
		href: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
		state1: null,
		state2: 'Symptoms typically last 2 week and affect daily functioning.',
		signs: ['Sad Mood', 'No Interest', 'Low Energy'],
	},
	{
		type: 'Persistent Depressive Disorder',
		subtitle: 'Dysthymia,',
		href: 'https://www.mayoclinic.org/diseases-conditions/persistent-depressive-disorder/symptoms-causes/syc-20350929',
		state1: 'A long-term, chronic form of depression lasting 2 years or more.',
		state2: 'Symptoms are usually less sever than major depression but longer lasting',
		signs: ['Long-term Sadness', 'Low -self-worth', 'Tired Often'],
	},

	{
		type: 'Bipolar Disorder ',
		subtitle: 'Depressive Episodes',
		href: 'https://www.webmd.com/bipolar-disorder/depression-symptoms',
		state1: 'People experience cycles of depression and mania/hypomania',
		state2: 'Mani phases involve elevated mood, impulsivity, and high energy',
		signs: ['Deep Sadness', 'No Motivation', 'Poor Sleep'],
	},

	{
		type: 'Seasonal Affective Disorder',
		subtitle: 'SAD',
		href: 'https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651',
		state1: 'Depression that occurs seasonally, ofter during winter',
		state2: null,
		signs: ['Seasonal Sadness', 'Low Energy', 'Oversleeping'],
	},

	{
		type: 'Postpartum Depression',
		subtitle: null,
		href: 'https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617',
		state1: 'Depression that occurs during pregnancy or after childbirth',
		state2: null,
		signs: ['Mood Swings', 'Bonding Issues', 'Extreme Tiredness'],
	},
	{
		type: 'Premenstrual Dysphoric Disorder',
		subtitle: 'PMDD',
		href: 'https://womenshealth.gov/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pm',
		state1: 'A sever form of premenstrual mood disorder',
		state2: null,
		signs: ['Mood Swings', 'Irritability', 'Anxiety'],
	},

	{
		type: 'Atypical Depression',
		subtitle: null,
		href: 'https://my.clevelandclinic.org/health/diseases/21131-atypical-depression',
		state1: 'A subtype of major depression with different symptom patterns',
		state2: null,
		signs: ['Mood Lifts Briefly', 'More Eating', 'More Sleeping'],
	},

	{
		type: 'Psychotic Depression',
		subtitle: null,
		href: 'https://www.nhs.uk/mental-health/conditions/psychotic-depression/',
		state1: 'Severe depression with psychotic symptoms.',
		state2: null,

		signs: ['Sever Sadness', 'Hallucinations', 'Paranoia'],
	},

	{
		type: 'Situational Depression',
		subtitle: 'Adjustment Disorder with Depressed Mood',
		href: 'https://www.webmd.com/depression/situational-depression',
		state1: 'Triggered by a specific stressful life event',
		state2: 'Common triggers include loss, divorce, job loss, or trauma',
		signs: ['Event-related Sadness', 'Crying', 'Trouble Coping'],
	},

	{
		type: 'Fuck Shit',
		subtitle: 'Memory Lane',
		href: '#',
		signs: ['Low Mood', 'Low Energy', 'Loss of interest'],

		state1: `There is a common fact about life I think every human can agree with... And that is Everybody go through shit. That's Life.`,
		state2: `However, there are some humans in life that life goes through them... and it's NOT normal. What does that mean...? Dive Deeper?`,

		signs: ['Personal Stories', 'Videos', 'Rants'],
	},
];

function createTypeCard(obj) {
	const parent = getById('depression-cards-container');

	const addContainerClasses = Array.of();

	const depressionCard = createElement('div');
	addClass(depressionCard, 'depression-card');
	addContainerClasses.push(depressionCard);

	if (obj.type === 'Fuck Shit') {
		depressionCard.id = 'fuck-shit';
	} else {
		depressionCard.id = null;
	}

	const typeName = createElement('h4');
	addClass(typeName, 'depression-type-name');
	textContent(typeName, obj.type);
	appendChild(depressionCard, typeName);

	const typeSignHolder = Array.of();

	for (let i = 0; i < 3; i++) {
		typeSignHolder.push(createElement('li'));
	}

	for (let sign of typeSignHolder) {
		appendChild(depressionCard, sign);
		addClass(sign, 'type-sign');
	}

	textContent(typeSignHolder.at(0), obj.signs.at(0));
	textContent(typeSignHolder.at(1), obj.signs.at(1));
	textContent(typeSignHolder.at(2), obj.signs.at(2));

	const statementContainer = createElement('div');
	addClass(statementContainer, 'statement-container');
	addContainerClasses.push(statementContainer);

	const depressionCardBtnContainer = createElement('div');
	addClass(depressionCardBtnContainer, 'depression-card-btn-container');
	addContainerClasses.push(depressionCardBtnContainer);

	appendChild(depressionCardBtnContainer, statementContainer);
	appendChild(depressionCard, depressionCardBtnContainer);

	const subtitle = createElement('span');
	if (obj.subtitle != null) {
		addClass(subtitle, 'subtitle-span');
		textContent(subtitle, obj.subtitle);
		addContainerClasses.push(subtitle);
		appendChild(depressionCard, subtitle);
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

	const learnMoreBtn = createElement('a');
	buildAnchorTag(learnMoreBtn, obj.href, depressionCardBtnContainer);

	addContainerClass(addContainerClasses);
	appendChild(parent, depressionCard);

	const goDeepBtn = getById('go-deep-btn');
	goDeepBtn.addEventListener(click, () => {
		if (
			subtitle.parentElement.id === 'fuck-shit' &&
			learnMoreBtn.parentElement.parentElement.id === 'fuck-shit'
		) {
			subtitle.parentElement.style.transform = 'scale(1.09)';
			subtitle.style.backgroundColor = 'var(--accent)';
			learnMoreBtn.style.backgroundColor = 'var(--accent)';

			setTimeout(() => {
				subtitle.parentElement.style.transform = 'scale(1)';
				subtitle.style.backgroundColor = 'var(--accent-bright)';
				learnMoreBtn.style.backgroundColor = 'var(--accent-bright)';
			}, 1000);
		}
	});
}

depressionObj.forEach((type) => {
	createTypeCard(type);
});

//++Personality Disorder

const personalityDisorders = [
	{
		name: 'Paranoid ',
		signs: [
			'Distrust others without clear reason',
			'Believes others intend harm or deception',
			'Holds grudges and is unforgiving',
		],
		cluster: 'A',
		href: 'https://www.mayoclinic.org/diseases-conditions/paranoid-personality-disorder/symptoms-causes/syc-20354463',
	},

	{
		name: 'Schizoid ',
		signs: [
			'Prefers being alone (little interest in relationships)',
			'Limited emotional expression',
			'Indifferent to praise or criticism',
		],
		cluster: 'A',
		href: 'https://my.clevelandclinic.org/health/diseases/23030-schizoid-personality-disorder',
	},

	{
		name: 'Schizotypal ',
		signs: [
			'Odd beliefs or magical thinking',
			'Unusual speech or behavior',
			'Social anxiety with paranoid fears',
		],
		cluster: 'A',
		href: 'https://my.clevelandclinic.org/health/diseases/23061-schizotypal-personality-disorder',
	},

	{
		name: 'Antisocial ',
		signs: [
			'Disregards rules and laws',
			'Manipulative or deceitful behavior',
			'Lack of remorse for harm',
		],
		cluster: 'B',
		href: 'https://www.mayoclinic.org/diseases-conditions/antisocial-personality-disorder/symptoms-causes/syc-20353928',
	},

	{
		name: 'Borderline ',
		signs: ['Intense mood swings', 'Fear of abandonment', 'Unstable relationships'],
		cluster: 'B',
		href: 'https://www.nimh.nih.gov/health/topics/borderline-personality-disorder',
	},
	{
		name: 'Histrionic ',
		signs: [
			'Seeks constant attention',
			'Overly dramatic or emotional',
			'Easily influenced by others',
		],
		cluster: 'B',
		href: 'https://my.clevelandclinic.org/health/diseases/9743-histrionic-personality-disorder',
	},
	{
		name: 'Narcissistic ',
		signs: ['Inflated sense of self-importance', 'Needs excessive admiration', 'Lack of empathy'],
		cluster: 'B',
		href: 'https://my.clevelandclinic.org/health/diseases/9742-narcissistic-personality-disorder',
	},

	{
		name: 'Avoidant ',
		signs: [
			'Avoids social interaction due to fear',
			'Feels inadequate or inferior',
			'Highly sensitive to criticism',
		],
		cluster: 'C',
		href: 'https://my.clevelandclinic.org/health/diseases/9761-avoidant-personality-disorder',
	},

	{
		name: 'Dependent ',
		signs: [
			'Needs excessive reassurance',
			'Difficulty making decisions alone',
			'Fear of being alone',
		],
		cluster: 'C',
		href: 'https://my.clevelandclinic.org/health/diseases/9783-dependent-personality-disorder',
	},
	{
		name: 'Obsessive-Compulsive ',
		signs: [
			'Preoccupied with order and rules',
			'Perfectionism that delays tasks',
			'Rigid and controlling behavior',
		],
		cluster: 'C',
		href: 'https://my.clevelandclinic.org/health/diseases/9490-ocd-obsessive-compulsive-disorder',
	},
];

function generatePersonalityDisorderCard(obj) {
	const clusterA = 'Odd / Eccentric';
	const clusterB = 'Dramatic / Emotional / Erratic';
	const clusterC = ' Anxious / Fearful';
	const parent = getById('personality-disorder-card-wrapper');

	const addContainerClasses = Array.of();

	const personalityCard = createElement('div');
	addClass(personalityCard, 'personality-card');
	addContainerClasses.push(personalityCard);

	const personalityInfoContainer = createElement('div');
	addClass(personalityInfoContainer, 'personality-info-container');
	appendChild(personalityCard, personalityInfoContainer);
	addContainerClasses.push(personalityInfoContainer);

	const personalityName = createElement('h2');
	addClass(personalityName, 'personality-name');
	textContent(personalityName, obj.name);
	appendChild(personalityInfoContainer, personalityName);

	const clusterGroup = createElement('h3');
	addClass(clusterGroup, 'cluster-group');
	if (obj.cluster == 'A') {
		textContent(clusterGroup, clusterA);
	}
	if (obj.cluster == 'B') {
		textContent(clusterGroup, clusterB);
	}
	if (obj.cluster == 'C') {
		textContent(clusterGroup, clusterC);
	}
	appendChild(personalityInfoContainer, clusterGroup);

	const clusterGroupLetter = createElement('h4');
	addClass(clusterGroupLetter, 'cluster-group-letter');
	textContent(clusterGroupLetter, `Cluster: ${obj.cluster}`);
	appendChild(personalityInfoContainer, clusterGroupLetter);

	const personalitySignsContainer = createElement('div');
	addClass(personalitySignsContainer, 'personality-signs-container');
	appendChild(personalityCard, personalitySignsContainer);

	addContainerClasses.push(personalitySignsContainer);

	const signsHolder = Array.of();

	for (let i = 0; i < 3; i++) {
		signsHolder.push(createElement('li'));
	}

	for (let signs of signsHolder) {
		appendChild(personalitySignsContainer, signs);
	}

	textContent(signsHolder.at(0), obj.signs.at(0));
	textContent(signsHolder.at(1), obj.signs.at(1));
	textContent(signsHolder.at(2), obj.signs.at(2));

	const personalityLearnMoreBtnContainer = createElement('div');
	addClass(personalityLearnMoreBtnContainer, 'personality-learn-more-btn-container');
	appendChild(personalitySignsContainer, personalityLearnMoreBtnContainer);
	addContainerClasses.push(personalityLearnMoreBtnContainer);

	const learnMoreBtn = createElement('a');
	buildAnchorTag(learnMoreBtn, obj.href, personalityLearnMoreBtnContainer);

	addContainerClass(addContainerClasses);

	appendChild(parent, personalityCard);
}

personalityDisorders.forEach((card) => {
	generatePersonalityDisorderCard(card);
});

//**Mental Health Disorder */

const psychoticDisorders = [
	{
		name: 'Schizophrenia',
		caption: 'A long-term disorder that disrupts reality, thinking, and behavior.',
		signs: ['Hallucinations', 'Delusions', 'Disorganized speech/Thinking'],
		href: 'https://www.webmd.com/schizophrenia/default.htm',
	},

	{
		name: 'Schizophreniform',
		caption: 'A shorter-duration version of schizophrenia (1-6 months)',
		signs: ['Hallucinations', 'Delusions', 'Confused or impaired thinking'],
		href: 'https://www.webmd.com/schizophrenia/mental-health-schizophreniform-disorder',
	},

	{
		name: 'Brief Psychotic',
		caption: 'Sudden hallucinations or delusions',
		signs: ['Sudden hallucinations or delusions', 'Disorganized speech', 'Rapid onset of symptoms'],
		href: 'https://www.webmd.com/schizophrenia/mental-health-brief-psychotic-disorder',
	},

	{
		name: 'Schizoaffective',
		caption: 'Combines psychotic symptoms with mood disorders.',
		signs: ['Hallucinations', 'Delusions', 'Disorganized Thinking'],
		href: 'https://www.webmd.com/schizophrenia/mental-health-schizoaffective-disorder',
	},

	{
		name: 'Delusional',
		caption: 'Persistent false beliefs without major disruption of functioning',
		signs: [
			'Fixed delusions',
			'Irritability related to beliefs',
			'Social or relationship difficulties',
		],
		href: 'https://www.webmd.com/schizophrenia/delusional-disorder',
	},

	{
		name: 'Substance/Med-Induced',
		caption: 'Psychosis caused by drugs, or medications.',
		signs: [
			'Hallucinations or delusions after use',
			'Confusion/Disorientation',
			'Symptoms tied to intoxication or withdrawal',
		],
		href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8732862/',
	},
	{
		name: 'Psychotic (Medical Condition)',
		caption: 'Psychosis resulting from an underlying medical issue',
		signs: [
			'Hallucinations or delusions',
			'Memory or attention problems',
			'Symptoms linked to illness/injury',
		],
		href: 'https://www.merckmanuals.com/professional/psychiatric-disorders/schizophrenia-and-related-disorders/psychotic-disorder-due-to-another-medical-condition',
	},
	{
		name: 'Cataonia',
		caption: 'A condition involving extreme disturbances in movement and responsiveness',
		signs: ['Little or no movement', 'Excessive or repetitive movement', 'Mutism'],
		href: 'https://www.webmd.com/schizophrenia/mental-catatonic-schizophrenia-overview',
	},
	{
		name: 'Other Specified Schizophrenia Spectrum',
		caption: `Psychotic symptoms that don't fully match a specific diagnosis`,
		signs: [
			'Mixed or unusual symptoms',
			'Distress or impairment',
			`Doesn't meet full criteria for another disorder`,
		],
		href: 'https://www.webmd.com/schizophrenia/schizophrenia-types',
	},
	{
		name: 'Unspecified Schizophrenia Spectrum',
		caption: `Used when there isn't enough information for a clear diagnosis`,
		signs: ['General psychotic symptoms', 'Limited clinical details', 'Functional Impairment'],
		href: 'https://www.publicsafetymedicine.org/leo/mental-health/schizophrenia-and-other-psychotic-disorders-mental',
	},
];

function generatePsychoticCard(obj) {
	const parent = getById('psychotic-disorder-card-wrapper');
	const addContainerClasses = [];

	const psychoticCard = createElement('div');
	addClass(psychoticCard, 'psychotic-card');
	addContainerClasses.push(psychoticCard);

	const psychoticInfoContainer = createElement('div');
	addClass(psychoticInfoContainer, 'psychotic-info-container');
	addContainerClasses.push(psychoticInfoContainer);
	appendChild(psychoticCard, psychoticInfoContainer);

	const psychoticName = createElement('h2');
	addClass(psychoticName, 'psychotic-name');
	textContent(psychoticName, obj.name);
	appendChild(psychoticInfoContainer, psychoticName);

	const psychoticCaption = createElement('p');
	addClass(psychoticCaption, 'psychotic-caption');
	textContent(psychoticCaption, obj.caption);
	appendChild(psychoticInfoContainer, psychoticCaption);

	const learnMoreBtn = createElement('a');
	buildAnchorTag(learnMoreBtn, obj.href, psychoticInfoContainer);

	const psychoticSignContainer = createElement('div');
	addClass(psychoticSignContainer, 'psychotic-signs-container');
	appendChild(psychoticCard, psychoticSignContainer);
	addContainerClasses.push(psychoticSignContainer);

	const signs = Array.of();

	for (let i = 0; i < 3; i++) {
		const li = createElement('li');
		signs.push(li);
	}

	textContent(signs.at(0), obj.signs.at(0));
	textContent(signs.at(1), obj.signs.at(1));
	textContent(signs.at(2), obj.signs.at(2));

	for (let sign of signs) {
		appendChild(psychoticSignContainer, sign);
	}

	addContainerClass(addContainerClasses);

	appendChild(parent, psychoticCard);
}

psychoticDisorders.forEach((card) => {
	generatePsychoticCard(card);
});
