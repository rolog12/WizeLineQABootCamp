package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import saucePages.Page5_AddMultiplesProducts;

public class TC5_AddMultipleProducts {
	
	Page5_AddMultiplesProducts AddingProd_ins=new Page5_AddMultiplesProducts();
	
	@Then("^user add multiple products$")
	public void user_add_multiple_products() throws Throwable {
	   AddingProd_ins.addingMultipleProducts();
	}
	
	@And("^basket products are checked$")
	public void basket_products_are_checked() throws Throwable {
	    
	    AddingProd_ins.goingToShopppingCart();
	    AddingProd_ins.ShoppingCartProdInList();
		AddingProd_ins.printBasketElements();
		//Clean Basket
		AddingProd_ins.resetShopingCart();
	}


}
