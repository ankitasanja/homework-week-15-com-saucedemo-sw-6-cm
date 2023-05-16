Feature: Login Test
  As user I want to login into sauce demo website

  @sanity @regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I enter email "standard_user"
    And  I enter password "secret_sauce"
    And  I click on login button
    Then I should navigate to login page successfully
    And  I should be able to verify text from products

  @smoke @regression
  Scenario: User should be able to verify six products are displayed on page
    Given I am on homepage
    When I enter email "standard_user"
    And  I enter password "secret_sauce"
    And  I click on login button
    Then I should navigate to login page successfully
    And  I should be able to verify that six products are displayed on page
