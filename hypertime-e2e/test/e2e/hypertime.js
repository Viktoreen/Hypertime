var config = require('../../nightwatch.conf.BASIC.js');
const ENTER_KEY = "\uE007";

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://ecutbildning.z16.web.core.windows.net/')
      .waitForElementVisible('body')
      .assert.title('Hypertime')
      .setValue("#username", "viktoreen")
      .keys(ENTER_KEY)
      .saveScreenshot('hypertime.png')
      .assert.elementPresent("ul")
      .pause(1000)
      .click('xpath', '//*[@id="app"]/div/div/div/a[2]')
      .end();
  }
};