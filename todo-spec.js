describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://dev3.bnext.in/seller/register');

    element(by.id('business_name')).sendKeys('Chirantan');
	element(by.id('unique_name')).sendKeys(' Chatterjee');
	element(by.id('autocomplete-location')).sendKeys('Pune');
	element(by.id('email_id')).sendKeys('abc@abc.com');
	element(by.id('mobile_number')).sendKeys('1234567891');
	element(by.id('password')).sendKeys('Abc@12345');
	element(by.id('confirmPassword')).sendKeys('Abc@12345');
	element(by.className('register-button')).click();
	
	browser.close();
	
  });
});
