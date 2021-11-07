package saucePages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import wrapperBase.wrapper;

public class Page1_LoginToWeb extends wrapper{
	
	
	By UserName_Locator = By.id("user-name");
	By Pwd_Locator = By.xpath("//*[@id=\"password\"]");	
	By LoginButton_Locator = By.xpath("//*[@id=\"login-button\"]");
	By AssertValidation_locator= By.xpath("//span[text()=\"Products\"]");
	protected String UserNameText="standard_user";
	protected String CorrectPassword="secret_sauce";
	protected String SomeTextInPage="PRODUCTS";
	protected String MainURL="https://www.saucedemo.com";
	
//	public LoginToWeb_Page(WebDriver driver_wrapper) {
//		super(driver_wrapper);
//		// TODO Auto-generated constructor stub
//	}
	
	public void setURL () throws Exception {
		chromeDriverSetUp();
		goToTheUrl(MainURL);
		Thread.sleep(2000);
	}
	
	public void EnterUserAndPwd () throws Exception {
		WaitAMoment(2, UserName_Locator);
		writeText(UserName_Locator, UserNameText);
		Thread.sleep(2000);
		WaitAMoment(2, Pwd_Locator);
		writeText(Pwd_Locator, CorrectPassword);
		Thread.sleep(2000);

	}
	public void ClickToBtnLogin() {
		click(LoginButton_Locator);
	}
	public void HardAssertion () throws Exception {
		LocatorAssertValidation(SomeTextInPage,AssertValidation_locator);
		Thread.sleep(2000);
	}
		
	}
