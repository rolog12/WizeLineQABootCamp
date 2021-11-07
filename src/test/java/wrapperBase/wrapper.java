package wrapperBase;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class wrapper {
	
	 static WebDriver driver_wrapper;
	
	 
	
	public 	WebDriver chromeDriverSetUp () {
		
		if (driver_wrapper==null) {
			System.setProperty("webdriver.chrome.driver", "C://Users//Usuario//Documents//2021//INSTALL//SELENIUM//chromeDriver//ChromeDriver95//chromedriver.exe");
			driver_wrapper = new ChromeDriver();			
	}		
		return driver_wrapper;
	}
	
	//get the URL
	public void getCurrentURL () {
		driver_wrapper.getCurrentUrl();
	}
	
	// navigate to the URL
	public void goToTheUrl (String TheUrl) {
		driver_wrapper.navigate().to(TheUrl);
		driver_wrapper.manage().window().maximize();
	}
	
	//Scrolling
	public void Scrolling (int position) {
		System.out.println("Scrolling");
		JavascriptExecutor js_instance= (JavascriptExecutor) driver_wrapper;
		js_instance.executeScript("window.scrollBy(0,"+position+")");		
	}
	
	//Explicit wait
	public void WaitAMoment (int timeInSeconds,By locator) {
		new WebDriverWait(driver_wrapper, timeInSeconds)
		.until(ExpectedConditions
		.visibilityOf(
				driver_wrapper.findElement(locator)
				)
		); 
	}
	
	//Click
	public void click (By locator) {
		driver_wrapper.findElement(locator).click();
	}
	
	//Send any String
	public void writeText(By locator, String InputText) {
		driver_wrapper.findElement(locator).sendKeys(InputText);
	}
	//Assert specific Locator
	public void LocatorAssertValidation (String ThisTextIsEqualsTo, By anotherText_locator) {
		Assert.assertEquals(ThisTextIsEqualsTo, driver_wrapper.findElement(anotherText_locator).getText());
	}
	//Assert current URL
	public void CurrentURLAssertion (String CurrentUrl_Text ) {
		Assert.assertEquals(CurrentUrl_Text, driver_wrapper.getCurrentUrl());
	}
	
	public Boolean isDisplayed (By locator) {

		try {
			return driver_wrapper.findElement(locator).isDisplayed();
			
		} catch (org.openqa.selenium.NoSuchElementException e) {
			// TODO: handle exception
			return false;
		}
	}
	
}
