package saucePages;

import org.openqa.selenium.By;

import wrapperBase.wrapper;

public class Page3_LogOff extends wrapper {
	
	By SideMenu_locator= By.id("react-burger-menu-btn"); //Side Menu Button
	By LogOutBtn_locator= By.id("logout_sidebar_link");
	protected String LoginPage= "https://www.saucedemo.com/";
	
	public void GotoSideMenu () throws Exception {
		click(SideMenu_locator);		
		WaitAMoment(3, SideMenu_locator);
		Thread.sleep(4000);
	}
	public void ClickOnLogOff () throws Exception {
		WaitAMoment(2, LogOutBtn_locator);
		click(LogOutBtn_locator);
		Thread.sleep(2000);
	}
	public void HardAssertion () {
		CurrentURLAssertion(LoginPage);
	}
}
