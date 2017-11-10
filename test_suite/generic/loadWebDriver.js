var webdriver = require('selenium-webdriver');
// var chrome = require('selenium-webdriver/chrome'),
// var firefox = require('selenium-webdriver/firefox');
//
// var driver = new webdriver.Builder()
//     .forBrowser(‘firefox’)
//     .setFirefoxOptions( /* … */)
//     .setChromeOptions( /* … */)
//     .build();
//     driver.get("http://www.google.com");
//     driver.getTitle().then(function( title ) {
//
//         // google page title should be printed
//         console.log(title)
//
//     });
//
//     //driver.quit();
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.google.com');
driver.sleep(3000)
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.sleep(3000)
driver.findElement(webdriver.By.name('btnG')).click();
//driver.quit();
