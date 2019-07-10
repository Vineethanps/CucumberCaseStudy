package casestudy;

import java.util.concurrent.TimeUnit;

import javax.swing.text.html.parser.Element;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class casestudy3 {
	WebDriver driver;
	WebElement element;
	@Given("url {string}")
	public void url(String string) {
	    // Write code here that turns the phrase above into concrete actions
		String chromepath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jar\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", chromepath);
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
	}

	@When("user enters username {string}")
	public void user_enters_username(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enters password {string}")
	public void user_enters_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("Login")).click();
	}
	@When("user clicks on search button and types{string}")
	public void user_clicks_on_search_button_and_types(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//*[@id=\"myInput\"]")).sendKeys("HeadPhone");
	}

	@When("user clicks on find details")
	public void user_clicks_on_find_details() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
	}

	@When("user clicks on add to cart button")
	public void user_clicks_on_add_to_cart_button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[2]/center/a")).click();
	}

	@When("user clicks on cart symbol")
	public void user_clicks_on_cart_symbol() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id=\"header\"]/div[1]/div/div/div[2]/div/a[2]")).click();
	}

	@When("user clicks on checkoutbutton")
	public void usert_clicks_on_checkoutbutton() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id=\"cart\"]/tfoot/tr[2]/td[5]/a")).click();
	}

	@When("user clicks on proceedtopay")
	public void usert_clicks_on_cproceedtopay() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("/html/body/b/div/div/div[1]/div/div[2]/div[3]/div/form[2]/input")).click();
		Thread.sleep(3000);
	}

	@When("user selects on AndhraBank")
	public void usert_selects_on_Andhrabank() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	   //element.
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@id='swit']/div[1]/label/i")).click();
	}
//
@When("usert clicks on continue")
	public void usert_clicks_on_continue() {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
	driver.findElement(By.id("btn")).click();
	
}
//
@When("user clicks on login button{int}")
public void user_clicks_on_login_button(Integer int1) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
	driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/input[1]")).sendKeys("123456");
	driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/input[2]")).sendKeys("Pass@456");
	driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/div/div[3]/input")).click();
	driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/input")).sendKeys("Trans@456");;
	driver.findElement(By.xpath("//*[@id=\"horizontalTab\"]/div[2]/div/div/div/div/form/div/div[2]/input")).click();

	Assert.assertTrue(driver.getCurrentUrl().contains("fromPayment"));
	}
	

	}

