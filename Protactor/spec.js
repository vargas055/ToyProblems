describe('Protractor Demo App', function() {
    browser.waitForAngularEnabled(false);
    it('should go to the page and scroll down', function() {
        browser.get('https://www.digarc.com/');

        browser.actions().mouseMove(element(by.id('menu-item-66'))).perform();

        element(by.linkText('Careers')).click();

        element(by.id('search_keywords')).sendKeys("ASSOCIATE");
  
        element(by.id('search_keywords')).sendKeys(protractor.Key.ENTER);

        browser.sleep(4000);

        expect(browser.getTitle()).toEqual('Careers - DIGARC');
    });
});