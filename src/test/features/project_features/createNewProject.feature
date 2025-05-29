Feature: Create New Project

Background: 
    Given I open the Polite Assist website
    When User clicks on the sidebar to open the chat list

@auth
Scenario: User create a new project successfully
    And User hover on the "Project" button
    And User clicks on the "Create New" button
    And User types project name as "<projectName>"
    And User types project description as "<projectDescription>"
    And User clicks on the "Create" button
    Then User should see the project created successfully
      Examples:
          | projectName | projectDescription |
          | Project 3   | Description 3      |
        #   | Project 2   | Description 2      |
        #   | Project 3   | Description 3      |