Feature: Login page
    Background: 
        Given I open the Polite Assist website
        When I click on "Continue with Microsoft account" button

    Scenario Outline: Users login successfully with valid credentials
        When User enter a email as "<Email>"
        And User click on "Continue" button
        And User enter a password as "<Password>"
        And User click on "Login" button
        And User click on "Yes" button
        Then User should be redirected to the dashboard
            Examples:
                | Email                          | Password       |
                | thao.tranthanh@politetech.com  | Loppho#62thnb  |

    Scenario Outline: Users login unsuccessfully with invalid email
        When User enter a email as "<Email>"
        And User click on "Continue" button
        Then User login unsuccessfully and display error message
            Examples:
                | Email           |
                | thao.tranthanhh@politetech.com  |

    Scenario Outline: Users login unsuccessfully with invalid password
        When User enter a email as "<Email>"
        And User click on "Continue" button
        And User enter a password as "<Password>"
        And User click on "Login" button
        Then User see an error message with "Your password is incorrect"
            Examples:
                | Email                          | Password       |
                | thao.tranthanh@politetech.com  | gggglr         |







