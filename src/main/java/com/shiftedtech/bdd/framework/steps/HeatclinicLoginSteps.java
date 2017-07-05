package com.shiftedtech.bdd.framework.steps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by PaxoStudent on 7/3/2017.
 */


public class HeatclinicLoginSteps extends StepBase {

    @Given("^As a not validated user$")
    public void as_a_not_validated_user() throws Throwable {
        driver.manage().deleteAllCookies();
    }

    @When("^Browse to the url \"([^\"]*)\"$")
    public void browse_to_the_url(String arg1) throws Throwable {
        driver.navigate().to(arg1);
    }

    @Then("^Heatclinic home page should show$")
    public void heatclinic_home_page_should_show() throws Throwable {
        WebElement image = driver.findElement(By.xpath(".//*[@id='logo']/h1/a"));
        Assert.assertTrue(image.isDisplayed());
        // Assert.assertEquals("Broadleaf Demo - Heat Clinic", driver.getTitle());
    }

    @When("^User click login link$")
    public void user_click_login_button() throws Throwable {
        driver.findElement(By.linkText("Login")).click();
    }

    @When("^Enter \"([^\"]*)\" as emaill address$")
    public void enter_as_emaill_address(String arg1) throws Throwable {
        WebElement email = driver.findElement(By.name("j_username"));
        email.sendKeys(arg1);
    }

    @When("^Enter \"([^\"]*)\" as password$")
    public void enter_as_password(String arg1) throws Throwable {
        WebElement passWord = driver.findElement(By.name("j_password"));
        passWord.sendKeys(arg1);
    }

    @When("^Click login Button$")
    public void click_login() throws Throwable {
        WebElement loginButton = driver.findElement(By.cssSelector(".login_button.big.red"));
        loginButton.click();
    }

    @Then("^Welcome message shows \"([^\"]*)\"$")
    public void welcome_message_shows(String mge) throws Throwable {
        String name = driver.findElement(By.xpath(".//*[@id='cart_info']/span/a")).getText();
        Assert.assertEquals(name, mge);
    }

    @Then("^Invalid email or password message display$")
    public void invalid_email_or_password_message_display() throws Throwable {
        String errorText = driver.findElement(By.xpath(".//*[@id='login']/span/p/span")).getText();
        String text = "The e-mail address and/or password entered do not match our records. Please try again";
        Assert.assertEquals(errorText, text);
    }

}