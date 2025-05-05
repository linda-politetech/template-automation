Feature: Create a new conversation
Background: 

  Given I open the Polite Assist website

@auth
  Scenario: User creates a new conversation successfully
    When User types message "<message>"
    And User clicks on the "Send" button
    Then User should see the chat on sidebar

Examples:
      | message |
      | Hello   |