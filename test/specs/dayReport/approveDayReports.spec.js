const { URL_LOGIN, pageRegisterSelectors} = require('../register_data');
const { loginAsAdmin, logout} = require('./actions');


const URL_REPORT = 'https://stage.pasv.us/diary/create';

const { expect } = require('chai');

const pageLoginSelectors = {
    emailInput: '//form//input[@name="email"]',
    passwordInput: '//form//input[@name="password"]',
    submitButton: '//button[@type="submit"]',
};

const pageCreateReport = {
    h1: 'Create day report',
    summary: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    hours: '10',
    morale: '0 – I give up',
    saveButtonText: 'Save',
    notificationMessage: 'Diary created',
};

const pageCreateReportSelectors = {
    h1: '//h1',
    summary: '//form//textarea[@name="description"]',
    hours: '//form//input[@name="hours"]',
    morale: '//form//select[@name="morale"]',
    mark1: '//form//input[@label="Watched lectures"]',
    mark2: '//form//input[@label="I understood everything"]',
    mark3: '//form//input[@label="Read documentation"]',
    saveButton: '//button[@type="submit"]',
};

const pageDairy = {
    h1: 'Daily reports',
};

const pageDairySelectors = {
    h1: 'h1',
};




describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        loginAsAdmin();
    });

    it('should open Create Day Report page', () => {
        browser.url(URL_REPORT);
        browser.pause(2000);
    });
    after('Logout', () => {
        logout();
        browser.pause(2000);

    });

});