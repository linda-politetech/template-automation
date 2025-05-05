Feature: Delete a conversation

Background: 
  Given I open the Polite Assist website

@auth
  Scenario: User deletes a conversation successfully
    When User clicks the sidebar button to open the sidebar
    And User selects the conversation to delete
    And User clicks the three dots button
    And User selects the "Delete" option
    And User clicks on the "Delete" button in the confirmation dialog
    Then User should see the conversation deleted successfully

  