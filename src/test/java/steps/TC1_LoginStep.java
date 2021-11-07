package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import saucePages.Page1_LoginToWeb;

public class TC1_LoginStep {
	
	Page1_LoginToWeb Login_ins=new Page1_LoginToWeb();;

	
	@Given("^user is on LOGIN page Scenario$")
	public void user_is_on_LOGIN_page_Scenario() throws Throwable {
	  
		System.out.println("llego GIVEN login");
		//driver_login =Login_var.chromeDriverSetUp();
		Login_ins.setURL();
		System.out.println("llego chrome set up");
	}

	@When("^user enter userName and password$")
	public void user_enter_userName_and_password() throws Exception {
	    Login_ins.EnterUserAndPwd();
	}

	@And("^clicks on LOGIN button$")
	public void clicks_on_LOGIN_button() {
	    Login_ins.ClickToBtnLogin();
	}

	@Then("^you are in products page$")
	public void you_are_in_products_page() throws Exception  {
	   Login_ins.HardAssertion();
	}
}
