const { HOST, URL_REGISTER, pageRegister, pageRegisterSelectors, } = require('./register_data');
const { expect } = require('chai');

const user = {
    firstName : 'John',
    lastName: 'Smith',
    password : 'zzzz1111',
    email: 'anna_aleksejeva@hotmail.com',
    phone: '14467367354',
    about: 'about me',
    goals: 'eat sleep code',
    englishLevel: 'Native',
};

describe('REGISTER WHEN EMAIL EXISTS IN DATABASE', () => {
    before(() => {browser.url(URL_REGISTER);
        $(pageRegisterSelectors.firstNameInput).setValue(user.firstName);
        $(pageRegisterSelectors.lastNameInput).setValue(user.lastName);
        $(pageRegisterSelectors.phoneInput).setValue(user.phone);
        $(pageRegisterSelectors.emailInput).setValue(user.email);
        $(pageRegisterSelectors.passwordInput).setValue(user.password);
        $(pageRegisterSelectors.aboutInput).setValue(user.about);
        $(pageRegisterSelectors.goalsInput).setValue(user.goals);
        $(pageRegisterSelectors.englishLevelInput).selectByVisibleText(user.englishLevel);
        $(pageRegisterSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should throw the right message when email already exists', () => {
        const actual = browser.$(pageRegisterSelectors.notificationMessage).getText();
        const expected = pageRegister.emailExistsMessage;
        expect(actual).equal(expected);
        browser.pause(1000);
    });
});