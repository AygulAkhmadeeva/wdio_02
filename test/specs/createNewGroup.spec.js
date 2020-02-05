const { URL_LOGIN, pageLoginSelectors, pageRegisterSelectors } = require('./register_data');

const URL_GROUPS = 'https://stage.pasv.us/group';

const { expect } = require('chai');

const pageCreateGroup = {
    h1: 'Create new Group',
    groupName: 'TestTest123',
    groupDescription: 'TestTestTest123455678899#$@',
    accessType: 'Members',
    buttonText: 'Create',
    notificationMessage: 'Group created',
};

const pageCreateGroupSelectors = {
    groupNameInput: 'form input[name="name"]',
    groupDescriptionInput: 'form input[name="description"]',
    accessTypeInput: 'form select[name="accessType"]',
};

describe('CREATE NEW GROUP', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue('anna_aleksejeva@hotmail.com');
        $(pageLoginSelectors.passwordInput).setValue('Princeton155');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should click Create New Group button', () => {
        browser.url(URL_GROUPS);
        browser.$('//a[@class=\'btn btn-secondary\']').click();
        browser.pause(3000);
    });

    it('should have the correct heading', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageCreateGroup.h1;
        expect(actual).equal(expected);
    });

    it('should fill Group Name field', () => {
        const element = $(pageCreateGroupSelectors.groupNameInput);
        element.setValue(pageCreateGroup.groupName);
    });

    it('should fill Group Description field', () => {
        const element = $(pageCreateGroupSelectors.groupDescriptionInput);
        element.setValue(pageCreateGroup.groupDescription);
    });

    it('should choose Access Type', () => {
        const element = $(pageCreateGroupSelectors.accessTypeInput);
        element.selectByVisibleText(pageCreateGroup.accessType);
        browser.pause(1000);
    });

    it('should have a correct Create button text', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = pageCreateGroup.buttonText;
        expect(actual).equal(expected);
    });

    it('should click Create button', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(1000);
    });

    it('should throw the correct message about created group', () => {
        const actual = browser.$(pageRegisterSelectors.notificationMessage).getText();
        const expected = pageCreateGroup.notificationMessage;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

});