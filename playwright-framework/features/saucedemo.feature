Feature: SauceDemo validation using Playwright and Cucumber

  Scenario: Successful login
    Given the user opens the SauceDemo login page
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the products page should be displayed

  Scenario: Login using data table
    Given the user opens the SauceDemo login page
    When the user logs in with the following details
      | username      | password     |
      | standard_user | secret_sauce |
    Then the products page should be displayed

  Scenario: Add first item to cart
    Given the user opens the SauceDemo login page
    When the user logs in with username "standard_user" and password "secret_sauce"
    And the user adds the first item to the cart
    Then the basket count should be "1"