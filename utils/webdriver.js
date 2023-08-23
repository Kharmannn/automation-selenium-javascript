const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

class Webdriver {

    constructor(browser) {
        this.browser = browser.toLowerCase();

        if (this.browser !== 'chrome' && this.browser !== 'firefox') {
            throw new Error('Invalid browser specified');
        }
    }

    getDriver() {
        if (this.browser === 'chrome') {
            const options = new chrome.Options().addArguments('--start-maximized');
            this.driver = new Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
                .build();
                
        } else if (this.browser === 'firefox') {
            const options = new firefox.Options().windowSize({ width: 1920, height: 1080 });
            this.driver = new Builder()
                .forBrowser('firefox')
                .setFirefoxOptions(options)
                .build();
        } else {
            throw new Error('Invalid browser specified');
        }

        return this.driver;
    }

}

module.exports = Webdriver;