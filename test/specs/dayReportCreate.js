
const {expect} = require ('chai');

const {URL_LOGIN} = require('./register_data');

describe('Login as Admin', () => {
    it('should fill Email field', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('olya6avg@gmail.com');
        $('form input[name="password"]').addValue('11111');
        $('form button[type="submit"]').click();
        browser.pause(500);
    });

    it('should click the button', async () => {
    //    const element  = $('a [qa="courses-link"]');
        const element = $('a [qa="courses-link"]');
        element.click();
        browser.pause(2000);
    });
});