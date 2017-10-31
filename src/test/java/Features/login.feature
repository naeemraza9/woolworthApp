@smokeTest
Feature: I want to login to use the woolworths app.

  Scenario: Successful login

    Given I am on the login page

    When I enter my "login" and my "password"

    Then I can successfully login