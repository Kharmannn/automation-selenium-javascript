const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments('--start-maximized'); // To maximize the Chrome window

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

module.exports = {
    getDriver: () => driver
};