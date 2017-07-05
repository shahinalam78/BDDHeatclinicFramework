Feature: Heatclinic e-commerce Login Functionality

  @debug
  Scenario: 1. Valid user valid password
    Given As a not validated user
    When Browse to the url "http://heatclinic.shiftedtech.com/"
    Then Heatclinic home page should show
    When User click login link
    And Enter "mdalam7841@gmail.com" as emaill address
    And Enter "shift786" as password
    And Click login Button
    And Welcome message shows "MD"

  @functional
  @debug
  Scenario: 2. Invalid user valid password
    Given As a not validated user
    When Browse to the url "http://heatclinic.shiftedtech.com/"
    Then Heatclinic home page should show
    When User click login link
    And Enter "mdddalam7841@gmail.com" as emaill address
    And Enter "shift786" as password
    And Click login Button
    Then Invalid email or password message display

  @debug
  Scenario: 3. Valid user invalid password
    Given As a not validated user
    When Browse to the url "http://heatclinic.shiftedtech.com/"
    Then Heatclinic home page should show
    When User click login link
    And Enter "mdalam7841@gmail.com" as emaill address
    And Enter "shift786999" as password
    And Click login Button
    Then Invalid email or password message display
