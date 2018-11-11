describe('Login and Enquiry Actions', function() {
  it('should Login and Enquiry', function() {
    browser.get('http://dev3.bnext.in/seller/login/');
    browser.manage().window().maximize();
	//Login 
    element(by.id('username')).sendKeys('official.chirantan@gmail.com');
	element(by.id('password')).sendKeys('Sayan@1995');
	browser.sleep(3000);
	element(by.css('[ng-disabled="!loginForm.$valid"]')).click();
	//browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
    //element(by.className('login-button')).click();
	
	//Enquiry
	element(by.className('sp-font-enquiry')).click();
	element(by.xpath('/html/body/div[1]/div/main/div/div/div/div[2]/div/div[2]/ul/li/div[1]/div[1]/div[3]/span')).click();
	browser.sleep(5000);
	element(by.css('[ng-click="enquiryReceived.rejectEnquiry($event,enquiry)"]')).click();
	browser.sleep(5000);
    element(by.className('sp-font-products')).click();
    browser.sleep(5000);
	
	
	
	
  });
});
