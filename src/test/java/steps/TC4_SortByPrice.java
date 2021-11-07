package steps;

import cucumber.api.java.en.Then;
import saucePages.Page4_SortByPrice;

public class TC4_SortByPrice {
	
	Page4_SortByPrice SortedPrices_ins=new Page4_SortByPrice();
	
	@Then("^products are sorted by price lowToHigh$")
	public void products_are_sorted_by_price_lowToHigh() throws Throwable {
		SortedPrices_ins.SortedByPrice();
	}
	@Then("^sorted products are checked$")
	public void sorted_products_are_checked() throws Throwable {
	    SortedPrices_ins.ProductSorted();
	}
}
