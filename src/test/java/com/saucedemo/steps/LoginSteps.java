package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String userName)  {
        new LoginPage().enterUserName(userName);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {

    }

    @And("^I should be able to verify text from products$")
    public void iShouldBeAbleToVerifyTextFromProducts() {
        String expectedMessage = "Products";
        Assert.assertEquals(expectedMessage,new LoginPage().getTextFromProductTitle(),"Login page not displayed");
    }
    @Then("^Six products should displayed on page$")
    public void sixProductsShouldDisplayedOnPage() {
        String expectedCount = "6";
        String actualNumberOfProducts = String.valueOf(new LoginPage().countProductOnList());
        Assert.assertEquals(expectedCount ,actualNumberOfProducts,"Total number of products are not displayed");
    }

    @And("^I should be able to verify that six products are displayed on page$")
    public void iShouldBeAbleToVerifyThatSixProductsAreDisplayedOnPage() {
    }
}
