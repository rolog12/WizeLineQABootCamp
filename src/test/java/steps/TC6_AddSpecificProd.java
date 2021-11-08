package steps;

import cucumber.api.java.en.Then;
import saucePages.Page6_AddSpecificProd;

public class TC6_AddSpecificProd {
	
	Page6_AddSpecificProd SpecificProd_ins=new Page6_AddSpecificProd();
	
	@Then("^user add Specific product$")
	public void user_add_Specific_product() throws Throwable {
	    SpecificProd_ins.AddSpecifiProd();
	    SpecificProd_ins.AssertValidation();
	    SpecificProd_ins.resetShopingCart();
	}

}
