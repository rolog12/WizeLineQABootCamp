package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import saucePages.LoginToWeb;

public class LoginStep {
	
	private WebDriver driver_login;
	LoginToWeb Login_var;
	
	@Given("^user is on LOGIN page Scenario$")
	public void user_is_on_LOGIN_page_Scenario() throws Throwable {
	  Login_var=new LoginToWeb(driver_login);
		Login_var.chromeDriverSetUp();
		Login_var.getTheUrl("https://www.saucedemo.com");
	}

	@When("^user enter userName and password$")
	public void user_enter_userName_and_password() throws Throwable {
	    Login_var.EnterUserAndPwd();
	}

	@And("^clicks on LOGIN button$")
	public void clicks_on_LOGIN_button() throws Throwable {
	    Login_var.ClickToBtnLogin();
	}

	@Then("^you are in products page$")
	public void you_are_in_products_page() throws Throwable {
	   Login_var.AmIinTheWeb();
	}
}
