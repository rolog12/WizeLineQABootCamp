package saucePages;

import org.openqa.selenium.By;

import wrapperBase.wrapper;

public class Page6_AddSpecificProd extends wrapper{
	
	By SpecificProd_locator=By.xpath("//*[@id=\"add-to-cart-sauce-labs-onesie\"]");
	By TextProd_loc=By.xpath("//*[@id=\"item_2_title_link\"]/div");
	//Reset Shoping Cart
	By SideMenu_locator= By.id("react-burger-menu-btn"); //Side Menu Button
	By ResetShoppingCart_locator=By.id("reset_sidebar_link"); //Reset Shopping Cart

	protected String specifiProd_Text="Sauce Labs Onesie";
	
	public void AddSpecifiProd () throws Exception {		
		WaitAMoment(3, SpecificProd_locator);
		click(SpecificProd_locator);
		Thread.sleep(2000);
	}
	
	public void AssertValidation () {
		LocatorAssertValidation(specifiProd_Text,TextProd_loc);
	}
	//reset shopping Cart
	public void resetShopingCart () throws Exception {
		click(SideMenu_locator);
		Thread.sleep(200);
		click(ResetShoppingCart_locator);
		Thread.sleep(200);
	}
		
}
