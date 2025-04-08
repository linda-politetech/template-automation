Feature: Login page
    Background: 
        Given I open the Polite Assist website
        When I click on "Continue with Microsoft account" button
        Then I will be redirected to Microsoft login page

    Scenario Outline: Users login successfully with valid credentials
        When User enter a valid username
        And User click on "Continue" button
        And User enter a valia password
            And User click on "Login" button
            And User click on "Yes" button
            Then User should be redirected to the dashboard






