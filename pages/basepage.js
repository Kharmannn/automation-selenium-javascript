const webdriver = require('../utils/webdriver');

class BasePage {
    constructor() {
        this.driver = webdriver.getDriver();
    }

    open(url) {
        this.driver.get(url);
    }
}

module.exports = BasePage;