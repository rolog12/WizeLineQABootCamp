package saucePages;

import org.openqa.selenium.By;

import wrapperBase.wrapper;

public class Page5_AddMultiplesProducts extends wrapper{
	
	
	// Adding Product 1,Product 2,Product 3, Product 4 to shopping Cart
		By Product1_locator=By.xpath("//*[@id=\"add-to-cart-sauce-labs-backpack\"]");
		By Product2_locator=By.xpath("//*[@id=\"add-to-cart-sauce-labs-bike-light\"]");
		By Product3_locator=By.xpath("//*[@id=\"add-to-cart-sauce-labs-bolt-t-shirt\"]");
		By Product4_locator=By.xpath("//*[@id=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]");
		//List Of Element Selected
		By ElementsSelected_locator=By.xpath("//*[@class=\"inventory_item_name\"]");
		By clickOnShoppingCart_locator=By.className("shopping_cart_link");
		By ShoppingCartElem_locator=By.xpath("//*[@class=\"inventory_item_name\"]");
		//Reset Shoping Cart
		By SideMenu_locator= By.id("react-burger-menu-btn"); //Side Menu Button
		By ResetShoppingCart_locator=By.id("reset_sidebar_link"); //Reset Shopping Cart
		
		
	public void addingMultipleProducts () throws Exception {
		WaitAMoment(2, Product1_locator);
		click(Product1_locator);
		Thread.sleep(2000);
		WaitAMoment(2, Product2_locator);
		click(Product2_locator);
		Thread.sleep(2000);
		WaitAMoment(2, Product3_locator);
		click(Product3_locator);
		Thread.sleep(2000);
		WaitAMoment(3, Product4_locator);
		click(Product4_locator);
		Thread.sleep(2000);	
	}
	
	
	
	//Lists Elements Assertion
	public void goingToShopppingCart () {
		click(clickOnShoppingCart_locator);
	}
	public void ShoppingCartProdInList() throws Exception {
		WaitAMoment(4, ShoppingCartElem_locator);
		ElementsOnShoppingCart(ShoppingCartElem_locator);
		Thread.sleep(2000);
	}
	
	//reset shopping Cart
		public void resetShopingCart () throws Exception {
			click(SideMenu_locator);
			Thread.sleep(200);
			click(ResetShoppingCart_locator);
			Thread.sleep(200);
		}
	
}
