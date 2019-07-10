/*package casestudy;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class casestudy2 {
	WebDriver driver;
	@Given("url is given as {string}")
	public void url_is_given_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
		String chromepath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jar\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", chromepath);
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
	}
	@When("user enters username as {string}")
	public void user_enters_username_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enters password as {string}")
	public void user_types_as_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks on login")
	public void user_clicks_on_login() {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.name("Login")).click();
	}

	@Then("user is in homepage")
	public void user_is_in_homepage() {
	    // Write code here that turns the phrase above into concrete actions
	   Assert.assertEquals("Home",driver.getTitle());
	}


}*/
