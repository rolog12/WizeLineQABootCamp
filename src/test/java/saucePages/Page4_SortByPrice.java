package saucePages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import wrapperBase.wrapper;

public class Page4_SortByPrice extends wrapper {
	
	By Sorted_locator=By.xpath("//*[@id=\"header_container\"]/div[2]/div[2]/span/select/option[3]");
	By Elements_locator=By.className("inventory_item_price");
	
	public void SortedByPrice () {
		click(Sorted_locator);		
	}
	public void ProductsChecked () {
		listsOfElements(Elements_locator);
		printListElements();
	}
}
