const { URL_LOGIN, } = require('./register_data');

const URL_REPORT = 'https://stage.pasv.us/diary/create';

const { expect } = require('chai');

const pageLoginSelectors = {
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    submitButton: 'form button[type="submit"]',
};

const pageCreateReport = {
    h1: 'Create day report',
    summary: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    hours: '10',
    morale: '0 – I give up',
    saveButtonText: 'Save',
};

const pageCreateReportSelectors = {
    h1: 'h1',
    summary: 'form textarea[name="description"]',
    hours: 'form input[name="hours"]',
    morale: 'form select[name="morale"]',
    mark1: 'form input[label="Watched lectures"]',
    mark2: 'form input[label="I understood everything"]',
    mark3: 'form input[label="Read documentation"]',
    saveButton: 'form button[type="submit"]',
};

const pageDairy = {
    h1: 'Daily reports',
};

const pageDairySelectors = {
    h1: 'h1',
};


describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        const element1 = $(pageLoginSelectors.emailInput);
        element1.setValue('anna_aleksejeva@hotmail.com');
        $(pageLoginSelectors.passwordInput).setValue('Princeton155');
        $(pageLoginSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should open Create Day Report page', () => {
        browser.url(URL_REPORT);
        browser.pause(1000);
    });

    it('should have the correct heading', () => {
        const actual = $(pageCreateReportSelectors.h1).getText();
        const expected = pageCreateReport.h1;
        expect(actual).equal(expected);
    });

    it('should fill up How Was Your Day field', () => {
        const element = $(pageCreateReportSelectors.summary);
        element.setValue(pageCreateReport.summary);
    });

    it('should fill up How Many Hours field', () => {
        const element = $(pageCreateReportSelectors.hours);
        element.setValue(pageCreateReport.hours);
    });

    it('should choose Your Morale dropdown', () => {
        const element = $(pageCreateReportSelectors.morale);
        element.selectByVisibleText(pageCreateReport.morale);
        browser.pause(1000);
    });

    it('should choose Daily Report 1 mark', () => {
        const element = $(pageCreateReportSelectors.mark1);
        element.click();
        browser.pause(1000);
    });

    it('should choose Daily Report several marks', () => {
        const element1 = $(pageCreateReportSelectors.mark2);
        const element2 = $(pageCreateReportSelectors.mark1);
        const element3 = $(pageCreateReportSelectors.mark3);
        element1.click();
        element2.click();
        element3.click();
        browser.pause(1000);
    });

    it('should have a correct Save button text', () => {
        const actual = $(pageCreateReportSelectors.saveButton).getText();
        const expected = pageCreateReport.saveButtonText;
        expect(actual).equal(expected);
    });

    it('should click Save button', () => {
        const element = $(pageCreateReportSelectors.saveButton);
        element.click();
        browser.pause(4000);
    });
});
describe('Dairy page', () => {
    it('should have a correct heading', () => {
        const actual = $(pageDairySelectors.h1).getText();
        const expected = pageDairy.h1;
        expect(actual).equal(expected);
        browser.pause(4000);
    });
});
