package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import saucePages.Page3_LogOff;

public class TC3_LogOff {
	
	Page3_LogOff LogOff_ins=new Page3_LogOff();
	
	@Then("^User going to Logg Off$")
	public void User_going_to_Logg_Off() throws Throwable {
	    LogOff_ins.GotoSideMenu();
	    LogOff_ins.ClickOnLogOff();
	    
	}
	@And("^user is on Login Page$")
	public void user_is_on_Login_Page() throws Throwable {
	    LogOff_ins.HardAssertion();
	}

}
