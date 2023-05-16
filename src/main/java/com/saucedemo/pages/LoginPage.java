package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement usernameField;
    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;
    @CacheLookup
    @FindBy(xpath = "//span[@class='title']")
    WebElement productsText;
    @CacheLookup
    @FindBy(className = "inventory_item_label")
    List<WebElement> sixProducts;

    //By verifySixProducts = By.xpath("//div[@class='inventory_item']");

    public void enterUserName(String userName) {
        log.info("Enter username " + userName + " to username field " + usernameField.toString());
        sendTextToElement(usernameField, userName);
    }

    public void enterPassword(String password) {
        log.info("Enter password " + password + " to password field " + passwordField.toString());
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        log.info("Clicking on Login Button " + loginButton.toString());
        clickOnElement(loginButton);
    }

    public void loginToApplication(String username, String password) {
        enterUserName(username);
        enterPassword(password);
        clickOnLoginButton();
    }

    public String getTextFromProductTitle() {
        log.info("Get text from product title");
        return getTextFromElement(productsText);
    }

    public int countProductOnList() {
        log.info("Count Total no of products");
        for (WebElement size : sixProducts) {
            size.getSize();
            break;
        }
        return sixProducts.size();
    }
}
