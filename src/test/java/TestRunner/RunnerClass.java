package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(
		features = "features",
		glue = "steps",
		monochrome = true,
		plugin = {
				"pretty","html:target/HtmlReports",
				"json:target/JsonReports/JsonCucumberRepor.json",
				"junit:target/JunitReports/JunitCucumberReport.xml",
		},
		tags = {"@WizeLineBootCamp"} //"@LogInSauceWebSite,@invalidLogin, @LogOut,@SortedByPrice,,@addMultipleProducts, @addSauceLabsProduct, @CompletePurchase
		)
public class RunnerClass {

	
}
