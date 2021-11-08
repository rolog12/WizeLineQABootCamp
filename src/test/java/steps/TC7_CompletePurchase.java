package steps;

import cucumber.api.java.en.Then;
import saucePages.Page7_CompletePurchase;

public class TC7_CompletePurchase {
	Page7_CompletePurchase completePur_ins=new Page7_CompletePurchase();
	
	@Then("^user add final product$")
	public void user_add_final_product() throws Throwable {
	   completePur_ins.SelectItem();
	}

	@Then("^purchase is completed$")
	public void purchase_is_completed() throws Throwable {
	   completePur_ins.CheckOutFinish();
	}

	@Then("^navigate to Order Confirmation Page$")
	public void navigate_to_Order_Confirmation_Page() throws Throwable {
	   completePur_ins.HardAssert();
	}	

}
