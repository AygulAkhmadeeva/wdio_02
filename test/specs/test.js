// const assert = require('assert');
//
// describe('webdriver.io page', () => {
//     it('should have the right title', () => {
//         browser.url('https://stage.pasv.us');
//         const title = browser.getTitle();
//         assert.strictEqual(title, 'Progress Monitor')
//     })
// });

const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})