Feature: Rename Chat

Background: 
    Given I open the Polite Assist website

@auth
Scenario: User renames a chat successfully
    When User clicks on the sidebar to open the chat list
    And User selects a chat from the list 
    And User clicks on the three-dot button
    And User selects the "Rename" option
    And User types new name as "<newName>"
    And User clicks on the "Save" button
    Then User should see the chat renamed successfully
      Examples:
          | newName |
          | New Chat 1 |
        #   | New Chat 2 |