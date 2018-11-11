var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {  
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
  browserName: 'firefox',
  },
  specs: ['EnquiryActions.js'],
  onPrepare: function(){
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots/images'
   }).getJasmine2Reporter());
  }
  
};