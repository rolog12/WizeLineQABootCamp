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
	
	 WebDriver driver_wrapper;
	
	// SetUp WebDriver InterFace
	public wrapper(WebDriver driver_wrapper) {
	//public WebDriver getDriver() {
		this.driver_wrapper=driver_wrapper;
	}
	// Set up Browser
	public 	WebDriver chromeDriverSetUp () {
		
		if (driver_wrapper==null) {
			System.setProperty("webdriver.chrome.driver", "C://Users//Usuario//Documents//2021//INSTALL//SELENIUM//chromeDriver//ChromeDriver95//chromedriver.exe");
			driver_wrapper = new ChromeDriver();			
	}		
		return driver_wrapper;
	}
	// navigate to the URL
	public void getTheUrl (String TheUrl) {
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
	//Assertion
	public void assertValidation (String ThisTextisEqualsTo, By anotherText_locator) {
		Assert.assertEquals(ThisTextisEqualsTo, driver_wrapper.findElement(anotherText_locator).getText());
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
