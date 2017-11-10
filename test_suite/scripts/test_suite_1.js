var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
// var firefox = require('selenium-webdriver/firefox');

test.describe('Google Search', function() {
  var driver;

  test.it('Search', function() {
    this.timeout(10000);
    driver= new webdriver.Builder()
       .withCapabilities({ 'browserName' : 'chrome' })
       //.withCapabilities(webdriver.Capabilities.chrome())
       // .forBrowser('chrome')
       // .setFirefoxOptions( /* … */)
       // .setChromeOptions( /* … */)
       .build();
    driver.get('http://www.google.com');
    driver.sleep(1000)
    console.log(driver);
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
  });

  test.it('Title',function(){
    driver.getTitle().then(function( title ) {
    assert.equal(title,"Google");
    });
  })

  after(function(){
    driver.sleep(1000)
    driver.quit();
  })
});
