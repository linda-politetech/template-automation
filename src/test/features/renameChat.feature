Feature: Rename a conversation

Background: 
  Given I open the Polite Assist website

@auth
  Scenario: User renames a conversation successfully
    When User clicks on the sidebar button to open the sidebar
    And User selects the conversation to rename
    And User clicks on the three dots button
    And User selects the "Rename" option
    And User types the new name "<newName>"
    And User clicks on the "Save" button
    Then User should see the conversation renamed successfully
    
    Examples:
      | newName                  |
      | Test rename conversation |