Feature: User API validation

  Scenario: Create a new user
    Given the API base url is available
    When I create a user with name "Venu" and job "QA Engineer"
    Then the create user response code should be 201

  Scenario: Update an existing user
    Given the API base url is available
    When I update a user with name "Venu Updated" and job "Senior QA Engineer"
    Then the update user response code should be 200