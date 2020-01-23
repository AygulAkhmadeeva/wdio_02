const HOST = `https://stage.pasv.us`;

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;


const user ={
    firstName: 'Viktor',
    lastName: 'Bogutski',
    phone: '01234567890',
    email: Math.random() +'test1@test.com',
    password: 'apppasv',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue enim nec imperdiet egestas. Ut egestas mauris mi, vel dictum neque auctor ac. Donec nec sapien nibh. Etiam commodo urna at sapien molestie, non egestas purus vulputate. Donec vel pellentesque metus. Donec vulputate nibh sit amet dignissim blandit. Sed bibendum.',
    goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    englishLevel: {
        zero: 'Zero',
        beginner: 'Beginner',
        Elementary: 'Elementary',
        preIntermediate: 'Pre-Intermediate',
        intermediate: 'Intermediate',
        upperIntermediate: 'Upper intermediate',
        advanced: 'Advanced',
        proficient: 'Proficient',
        native: 'Native',
    }
};

const registerPage = {
    title: 'Progress Monitor',
    h1: 'You are a new user',
    buttonText: 'submit',
};

const pageRegisterSelectors = {
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]',
    submitButton: 'form button[type="submit"]'
};

const pageLoginSelectors = {
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    buttonSubmit: 'form button[type="submit"]',
};

const pageProfileSelectors = {
    h1: 'h1'
};

const profilePage = {
    h1: 'You are a new user'
};


module.exports = {URL_LOGIN ,URL_REGISTER, profilePage, pageLoginSelectors, pageProfileSelectors, pageRegisterSelectors, registerPage, user}