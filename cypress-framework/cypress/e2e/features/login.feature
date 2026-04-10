Feature: Login validation

  Scenario: Login with valid users using data table
    Given the user is on the login page
    When the user logs in with the following credentials
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |
    Then the inventory page should be displayed

  @test
  Scenario: Login with invalid password
    Given the user is on the login page
    When the user enters username "standard_user" and password "wrong_password"
    Then an error message "Username and password do not match" should be displayed