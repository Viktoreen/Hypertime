var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .assert.title('Hypertime')
      .setValue("#username", "oscarljungberg")
      .keys("\uE007")
      .pause(5000)
      .saveScreenshot('hypertime.png')
      .end();
  }
};