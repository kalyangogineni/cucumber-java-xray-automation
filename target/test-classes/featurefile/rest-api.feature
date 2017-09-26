Feature: Test retrieval of user information

  Scenario Outline: Retrive user information with valid username and password
    When I request user information with <username> and <password>
    Then I should get http respose code as 200
    And I should get the valid response

    Examples:
    |username|password|
    |test1   |pass1   |
    |test2   |pass2   |


