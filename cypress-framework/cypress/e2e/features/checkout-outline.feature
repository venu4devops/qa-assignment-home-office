Feature: Checkout outline validation

  Scenario Outline: Validate login outcomes
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    Then the result should be "<result>"

    Examples:
      | username        | password     | result  |
      | standard_user   | secret_sauce | success |
      | locked_out_user | secret_sauce | failure |

  Scenario Outline: Add item to cart after login
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    And the user adds one item to the cart
    Then the cart count should be "1"

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |