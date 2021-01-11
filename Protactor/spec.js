describe('Protractor Demo App', function() {
    browser.waitForAngularEnabled(false);
    it('should got to the page and scroll down', function() {
        browser.get('https://www.digarc.com/')
        expect(browser.getTitle()).toEqual('Connected Curriculum - DIGARC');
        browser.executeScript('window.scrollTo(0, document.body.scrollHeight);')
        .then(()=>{

        })
    });
  });
  