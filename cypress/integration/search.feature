Feature: Search

    I want to find one of the features using the search feature

    Scenario: Find some fitur
        Given I open index page
        When I submit some fitur in the search box
        Then I see the results of what is written in the search box