Feature: Login

  Background:
    Given User is on the login page

  Scenario: User can login with valid credentials
    Given User enters username "<username>"
    And User enters password "<password>"
    When User clicks on the login button
    Then User should be redirected to the dashboard page

    Examples:
      | username                     | password         |
      | trang.vuhuyen@politetech.com | B!372339536556ud |

  Scenario: User can't log in with invalid password
    Given User enters username "<username>"
    And User enters password "<password>"
    When User clicks on the login button
    Then User should see an error message
    Examples:
      | username                     | password        |
      | trang.vuhuyen@politetech.com | B!372339536556u |

Scenario: User can't log in with invalid username
    Given User enters username "<username>"
    Then System notifies that the username is not valid
    Examples:
      | username                     | 
      | trang.vuhu1yen@politetech.com |

