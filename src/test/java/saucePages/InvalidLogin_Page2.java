package saucePages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import wrapperBase.wrapper;

public class InvalidLogin_Page2 extends wrapper {
	
	
	By UserName_Locator = By.id("user-name");
	By Pwd_Locator = By.xpath("//*[@id=\"password\"]");
	By UserOrPwdNoMatch_Locator= By.xpath("//*[@id=\"login_button_container\"]/div/form/div[3]/h3");
	
	protected String UserNameText="standard_user";
	protected String IncorrectPasswordText="secret_sauceEE";
	protected String UserNotMatchText="Epic sadface: Username and password do not match any user in this service";
	

	public void EnterUserAndPwd () throws Exception {
		WaitAMoment(2, UserName_Locator);
		writeText(UserName_Locator, UserNameText);
		Thread.sleep(2000);
		WaitAMoment(2, Pwd_Locator);
		writeText(Pwd_Locator, IncorrectPasswordText);
		Thread.sleep(2000);		
		System.out.println("enter user invalid");
	}
	
	public void HardAssertion () throws Exception {
		LocatorAssertValidation(UserNotMatchText,UserOrPwdNoMatch_Locator );
		Thread.sleep(2000);
	}
	

}
