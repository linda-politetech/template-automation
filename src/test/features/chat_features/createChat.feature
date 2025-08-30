Feature: Create Chat

Background: 
    Given I open the Polite Assist website

@auth
 Scenario: User creates a new chat successfully
    When User types message as "<message>"
    And User clicks on the "Send" button 
    Then User should see the chat on sidebar
      Examples:
          | message |
          | Hello  |
        #   |How are you? |
        #   |What is your name? |