// pages/HomePage.js

const { Key } = require('selenium-webdriver');
const BasePage = require('../basepage');
const HomePageLocators = require('./homepage_locators');

class HomePage extends BasePage {
    constructor() {
        super();
        this.searchInput = this.driver.findElement(HomePageLocators.searchInput);
        this.searchButton = this.driver.findElement(HomePageLocators.searchButton);
    }

    performSearch(query) {
        this.searchInput.sendKeys(query, Key.RETURN);
    }
}

module.exports = HomePage;
