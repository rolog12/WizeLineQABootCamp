package saucePages;

import org.openqa.selenium.By;

import wrapperBase.wrapper;

public class Page7_CompletePurchase extends wrapper {
	
	By lastItem_locator=By.xpath("//*[@id=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]");
	By ShoppingCart_locator=By.xpath("//*[@class=\"shopping_cart_link\"]");
	By CheckOut_loc=By.xpath("//*[@id=\"checkout\"]");
	By FirstNAme_locator=By.id("first-name");
	By LastName_locator=By.id("last-name");
	By PostalC_locator=By.id("postal-code");
	By Continuew_locator=By.xpath("//*[@id=\"continue\"]");
	By FinishiBtn_locator=By.xpath("//*[@id=\"finish\"]");
	By complete_locator=By.xpath("//*[@id=\"header_container\"]/div[2]/span");
	
	protected String FName_text="RODRIGO";
	protected String LName_text="GARCIA";
	protected String PostalC_text="11211";
	protected String complete_text="CHECKOUT: COMPLETE!";
	
	public void SelectItem () throws Exception {
		
		click(lastItem_locator);
		Thread.sleep(2000);	
	}
	
	public void CheckOutFinish () throws Exception{
		//Go to Checkout
		
		click(ShoppingCart_locator);
		Thread.sleep(2000);		
		//System.out.println("Products Added");
		//CheckOut		
		click(CheckOut_loc);
		Thread.sleep(2000);		
		//FirstName		
		writeText(FirstNAme_locator, FName_text);
		Thread.sleep(2000);
		//LastName		
		writeText(LastName_locator, LName_text);
		Thread.sleep(2000);
		//ZipCode		
		writeText(PostalC_locator, PostalC_text);
		Thread.sleep(2000);
		System.out.println("Checkout completed ready to Continue");
		//Click CONTINUE		
		click(Continuew_locator);
		Thread.sleep(2000);
		//Press FINISH Button
		click(FinishiBtn_locator);
		Thread.sleep(2000);		
		//driverWize_ins.close();
	}
	public void HardAssert () throws Exception {		
		LocatorAssertValidation(complete_text, complete_locator);		
		Thread.sleep(2000);		
	}
}
