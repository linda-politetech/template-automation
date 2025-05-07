Feature: Delete Chat

    Background:
        Given I open the Polite Assist website

    @auth
    Scenario: User deletes a chat successfully
        When User clicks on the sidebar to open the chat list
        And User selects a chat from the list
        And User clicks on the three-dot button
        And User selects the "Delete" option
        And User confirms the deletion
        Then User should see the chat deleted successfully