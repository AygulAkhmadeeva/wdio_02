const {expect} = require ('chai');

const {URL_REGISTER, profilePage, pageLoginSelectors, pageProfileSelectors, pageRegisterSelectors, registerPage, user} = require('./register_data');


describe('register new user', () => {

  it('should fill First name field', () => {
    browser.url(URL_REGISTER);
    const Hello = $(pageRegisterSelectors.firstName);
   // Hello.addValue(user.firstName);
    Hello.addValue("hello");
    browser.pause(500);
  });

  // it('should fill Last name field', () => {
  //   const element  = $(pageRegisterSelectors.lastNameInput);
  //   element.addValue(user.lastName);
  //   browser.pause(500);
  // });
  //
  // it('should fill Phone field', () => {
  //   const element  = $(pageRegisterSelectors.phoneInput);
  //   element.addValue(user.phone);
  //   browser.pause(500);
  // });
  //
  // it('should fill Email field', () => {
  //   const element  = $(pageRegisterSelectors.emailInput);
  //   element.setValue(user.email);
  //   browser.pause(500);
  // });
  //
  // it('should fill Password field', () => {
  //   const element  = $(pageRegisterSelectors.passwordInput);
  //   element.addValue(user.password);
  //   browser.pause(500);
  // });
  //
  // it('should fill About field', () => {
  //   const element  = $(pageRegisterSelectors.aboutInput);
  //   element.addValue(user.about);
  //   browser.pause(500);
  // });
  //
  // it('should fill Goals box', () => {
  //   const element  = $(pageRegisterSelectors.goalsInput);
  //   element.addValue(user.goals);
  //   browser.pause(500);
  // });
  //
  // it('should fill select box', () => {
  //   const element  = $(pageRegisterSelectors.englishLevelInput);
  //   element.selectByVisibleText(user.englishLevel.zero);
  //   browser.pause(500);
  // });
  //
  // it('should click the button', () => {
  //   const element  = $(pageRegisterSelectors.submitButton);
  //   element.click();
  //   browser.pause(2000);
  // });
  //
  // // LOGIN PAGE
  //
  // it('should fill Email field', () => {
  //   const element  = $(pageLoginSelectors.emailInput);
  //   element.setValue(user.email);
  //   browser.pause(500);
  // });
  //
  // it('should fill Password field', () => {
  //   const element  = $(pageLoginSelectors.passwordInput);
  //   element.addValue(user.password);
  //   browser.pause(500);
  // });
  //
  // it('should click the button', () => {
  //   const element  = $(pageLoginSelectors.buttonSubmit);
  //   element.click();
  //   browser.pause(2000);
  // });
  //
  // // PROFILE PAGE
  //
  // it('should have the right title', () => {
  //   const actualTitle = $(pageProfileSelectors.h1).getText();
  //   const expectedTitle = profilePage.h1;
  //   expect(actualTitle).equal(expectedTitle );
  //   browser.pause(5000);
  //
  // });

});


