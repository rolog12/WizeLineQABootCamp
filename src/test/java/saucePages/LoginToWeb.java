package saucePages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import wrapperBase.wrapper;



public class LoginToWeb extends wrapper{
	
	By UserName_Locator = By.id("user-name");
	By Pwd_Locator = By.xpath("//*[@id=\"password\"]");	
	By LoginButton = By.xpath("//*[@id=\"login-button\"]");
	By AssertValidation_locator= By.xpath("//span[text()=\"Products\"]");
	protected String UserNameText="standard_user";
	protected String CorrectPassword="secret_sauce";
	protected String IncorrectPassword="secret_sauce";
	protected String TextInProductPage="PRODUCTS";
	String URL="https://www.saucedemo.com";
	
	public LoginToWeb(WebDriver driver_wrapper) {
		super(driver_wrapper);
		// TODO Auto-generated constructor stub
	}
	
	
	
//	
//	public void setUpBrowser() {
//		
//		getDriver(driver_LoginToWeb);
//		chromeDriverSetUp();
//		getTheUrl("https://www.saucedemo.com");
//	}
	
	public void EnterUserAndPwd () {
		writeText(UserName_Locator, UserNameText);
		writeText(Pwd_Locator, CorrectPassword);
	}
	public void ClickToBtnLogin() {
		click(LoginButton);
	}
	public void AmIinTheWeb () {
		assertValidation(TextInProductPage,AssertValidation_locator );
	}
		
	}
