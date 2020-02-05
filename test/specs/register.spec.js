const { HOST, URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin, pageLoginSelectors, pageConfirmation, pageConfirmationSelectors } = require('./register_data');

const { expect } = require('chai');

describe('REGISTER PAGE', () => {
  before(() => {browser.url(URL_REGISTER);
  });


  it('should have the right Title', () => {
    const actualTitle = browser.getTitle();
    const expectedTitle = pageRegister.title;
    expect(actualTitle).equal(expectedTitle);
  });

  it('should have the right Heading', () => {
    const actual = $(pageRegisterSelectors.h1).getText();
    const expected = pageRegister.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const actual = $(pageRegisterSelectors.description).getText();
    const expected = pageRegister.description;
    expect(actual).equal(expected);
  });

  it('should have a correct submit button text', () => {
    const actual = $(pageRegisterSelectors.submitButton).getText();
    const expected = pageRegister.buttonText;
    expect(actual).equal(expected);
  });

  it('should fill up First Name field', () => {
    const element = $(pageRegisterSelectors.firstNameInput);
    element.setValue(user.firstName);
  });

  it('should fill up last name field', () => {
    const element = $(pageRegisterSelectors.lastNameInput);
    element.setValue(user.lastName);
  });

  it('should fill up phone field', () => {
    const element = $(pageRegisterSelectors.phoneInput);
    element.setValue(user.phone);
  });

  it('should fill up email field', () => {
    const element = $(pageRegisterSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill up password field', () => {
    const element = $(pageRegisterSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should fill up About field', () => {
    const element = $(pageRegisterSelectors.aboutInput);
    element.setValue(user.about);
  });
  it('should fill up Goals field', () => {
    const element = $(pageRegisterSelectors.goalsInput);
    element.setValue(user.goals);
  });

  it('should choose English level dropdown', () => {
    const element = $(pageRegisterSelectors.englishLevelInput);
    element.selectByVisibleText(user.englishLevel);
  });

  it('should click Submit button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(1000);
  });

  it('should throw correct message about successful registration', () => {
    const actual = browser.$(pageRegisterSelectors.notificationMessage).getText();
    const expected = pageRegister.notificationMessage;
    expect(actual).equal(expected);
    browser.pause(1000);
  });

});

describe('LOGIN PAGE', () => {
  before(() => {browser.url(URL_LOGIN);
  });

  it('should have the right Title', () => {
    const actual = browser.getTitle();
    const expected = pageLogin.title;
    expect(actual).equal(expected);
  });

  it('should have the right Heading', () => {
    const actual = $(pageLoginSelectors.h1).getText();
    const expected = pageLogin.h1;
    expect(actual).equal(expected);
  });

  it('should fill up email field on Login page', () => {
    const element = $(pageLoginSelectors.emailInput);
    element.setValue(user.email);
    browser.pause(2000);
  });

  it('should fill up password field on Login page', () => {
    const element = $(pageLoginSelectors.passwordInput);
    element.setValue(user.password);
    browser.pause(2000);
  });

  it('should have a correct login button text', () => {
    const actual = $(pageLoginSelectors.submitButton).getText();
    const expected = pageLogin.buttonText;
    expect(actual).equal(expected);
  });

  it('should click Login button', () => {
    const element = $(pageLoginSelectors.submitButton);
    element.click();
    browser.pause(4000);
  });
});

describe('CONFIRMATION PAGE', () => {
  it('should have a correct heading', () => {
    const actual = $(pageConfirmationSelectors.h1).getText();
    const expected = pageConfirmation.h1;
    expect(actual).equal(expected);
  });

  it('should throw correct message about successful authorization', () => {
    const actual = browser.$(pageRegisterSelectors.notificationMessage).getText();
    const expected = pageRegister.authorizationMessage;
    expect(actual).equal(expected);
    browser.pause(1000);
  });
});