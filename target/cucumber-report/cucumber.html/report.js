$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into sauce demo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3903182100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify text from products",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 161223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 156355400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 110362400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 156770900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToVerifyTextFromProducts()"
});
formatter.result({
  "duration": 102794100,
  "status": "passed"
});
formatter.after({
  "duration": 869805900,
  "status": "passed"
});
formatter.before({
  "duration": 2031037600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to verify six products are displayed on page",
  "description": "",
  "id": "login-test;user-should-be-able-to-verify-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should be able to verify that six products are displayed on page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 164900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 219870700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 161047000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 142824200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToVerifyThatSixProductsAreDisplayedOnPage()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.after({
  "duration": 1486995800,
  "status": "passed"
});
});