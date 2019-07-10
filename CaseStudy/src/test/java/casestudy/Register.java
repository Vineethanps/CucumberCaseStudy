package casestudy;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Register {
	WebDriver driver;
	@Given("url of testmeapp {string}")
	public void url_of_testmeapp(String string) {
	    // Write code here that turns the phrase above into concrete actions
		String chromepath="C:\\Users\\a07208trng_b4a.04.26\\Desktop\\selenium\\jar\\chromedriver_win32\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", chromepath);
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
		//Assert.assertTrue(driver.getCurrentUrl().contains("Sign Up"));
	}

	@When("user enters {string} as username")
	public void user_enters_as_username(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	    driver.findElement(By.name("userName")).sendKeys(string);
	}

	@When("user enters {string} as firstname")
	public void user_enters_as_firstname(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		 driver.findElement(By.name("firstName")).sendKeys(string);
	}

	@When("user enters {string} as lastname")
	public void user_enters_as_lastname(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		 driver.findElement(By.name("lastName")).sendKeys(string);
	}

	@When("user enters {string} as password")
	public void user_enters_as_password(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("password")).sendKeys(string);
	}

	@When("user enters {string} as confirmpassword")
	public void user_enters_as_confirmpassword(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("confirmPassword")).sendKeys(string);
	}

	@When("user clicks on {string} as gender")
	public void user_clicks_on_as_gender(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.cssSelector("input[value='Female']")).click();
	}

	@When("user enters {string} as email")
	public void user_enters_as_email(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("emailAddress")).sendKeys(string);
	}

	@When("user enters {string} as mobilenumber")
	public void user_enters_as_mobilenumber(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("mobileNumber")).sendKeys(string);
	}

	@When("user enters {string}as DOB")
	public void user_enters_as_DOB(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	    driver.findElement(By.name("dob")).sendKeys(string);
	}

	

	@When("user enters {string} as address")
	public void user_enters_as_address(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("address")).sendKeys(string);
	}

	@When("user selects {string} security question")
	public void user_selects_security_question(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		Select sel=new Select(driver.findElement(By.name("securityQuestion")));
	}

	@When("user enters {string} as answer")
	public void user_enters_as_answer(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("answer")).sendKeys(string);
		
	}

	@Then("user clicks on REGISTER")
	public void user_clicks_on_REGISTER() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		driver.findElement(By.name("Submit")).click(); 
		Assert.assertEquals("Login", driver.getTitle());
	}


}
