const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

const email = Math.random().toFixed(4) + 'dcbcj@hotmail.com';


const user = {

    firstName : 'John',
    lastName: 'Smith',
    password : 'zzzz1111',
    email: email,
    phone: '14467367354',
    about: 'about me',
    goals: 'eat sleep code',
    englishLevel: 'Native',
};

const pageRegister = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit',
    notificationMessage: 'User created successfully. Please check your email and verify it',
    authorizationMessage: 'Auth success',
    emailExistsMessage: 'User with this e-mail exists',
};

const pageRegisterSelectors = {
    h1: '//h1',
    description: '//p',
    submitButton: '//button[@type="submit"]',
    firstNameInput: '//form//input[@name="firstName"]',
    lastNameInput: '//form//input[@name="lastName"]',
    phoneInput: '//form//input[@name="phone"]',
    emailInput: '//form//input[@name="email"]',
    passwordInput: '//form//input[@name="password"]',
    aboutInput: '//form//textarea[@name="about"]',
    goalsInput: '//form//textarea[@name="goals"]',
    englishLevelInput: '//form//select[@name="englishLevel"]',
    notificationMessage: '//div[@class="notifications-wrapper"]//h4[@class="notification-title"]'
    //.notification-wrapper .notification-title - css style

};

const pageLogin = {
    title: 'Progress Monitor',
    h1: 'User Login',
    buttonText: 'Login',
};

const pageLoginSelectors = {
    h1: '//h1',
    submitButton: '//button[@type="submit"]',
    emailInput: '//form//input[@name="email"]',
    passwordInput: '//form//input[@name="password"]',
};

const pageConfirmation = {
    h1: 'You are a new user',
};

const pageConfirmationSelectors = {
    h1: '//h1',
};

module.exports = {HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin, pageLoginSelectors, pageConfirmation, pageConfirmationSelectors};
