package casestudy;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class casestudy4 {
	WebDriver driver;
	@Given("url for TestMeApp {string}")
	public void url_for_TestMeApp(String string) {
	    // Write code here that turns the phrase above into concrete actions
		String chromepath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jar\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", chromepath);
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
	}

	@When("user enters username field {string}")
	public void user_enters_username_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enters password  field {string}")
	public void user_enters_password_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks login button")
	public void user_clicks_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("Login")).click();
	}

	@When("user clicks search button and types{string}")
	public void user_clicks_search_button_and_types(String string) {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.xpath("//*[@id=\"myInput\"]")).sendKeys("HeadPhone");
	}

	@When("user clicks find details")
	public void user_clicks_find_details() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
}

	@Then("TestMeApp doesn't display the cart icon")
	public void testmeapp_doesn_t_display_the_cart_icon() {
	    // Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[2]/center/a")).click();
	//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	Assert.assertTrue(driver.findElement(By.cssSelector("a[href='displayCart.htm']")).isEnabled());
	//driver.findElement(By.cssSelector("a[href='displayCart.htm']")).click();
	}

}
