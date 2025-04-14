Feature: Authentication example

Background: 
  Given I open the Polite Assist website

@auth
  Scenario: I logged in successfully using token
    Then User should be logged in