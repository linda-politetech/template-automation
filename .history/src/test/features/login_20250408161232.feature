Feature: Login page
    Background: 
        Given I open the Polite Assist website
        When I click on "Continue with Microsoft account" button
        Then I will be redirected to Microsoft login page

    Scenario Outline: Users login successfully with valid credentials
        When User enter a valid username
  





