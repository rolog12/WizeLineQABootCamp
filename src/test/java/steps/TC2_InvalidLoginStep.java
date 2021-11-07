package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import saucePages.Page2_InvalidLogin;

public class TC2_InvalidLoginStep {
	
	//WebDriver driver_login;
	Page2_InvalidLogin InvalildLogin_ins=new Page2_InvalidLogin();
	
	@When("^user enter userName and wrong password$")
	public void user_enter_userName_and_wrong_password() throws Exception {
		
	   //InvalildLogin_var= new invalidLogin_Page(driver_login);
	   InvalildLogin_ins.EnterUserAndPwd();
	}

	@Then("^an error message is displayed$")
	public void an_error_message_is_displayed() throws Exception{
		InvalildLogin_ins.HardAssertion();
	  
	}
}
