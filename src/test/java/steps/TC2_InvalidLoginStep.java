package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import saucePages.InvalidLogin_Page2;

public class TC2_InvalidLoginStep {
	
	//WebDriver driver_login;
	InvalidLogin_Page2 InvalildLogin_ins=new InvalidLogin_Page2();
	
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
