const Webdriver = require('../utils/webdriver');
const browser = 'chrome';

class BasePage {
    constructor() {
        this.driver = new Webdriver(browser).getDriver();
    }

    open(url) {
        this.driver.get(url);
    }
}

module.exports = BasePage;