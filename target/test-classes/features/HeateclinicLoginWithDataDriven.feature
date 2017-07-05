Feature: Heatclinic e-commerce Login Functionality

  Background:
    Given As a not validated user
    When Browse to the url "http://heatclinic.shiftedtech.com/"
    Then Heatclinic home page should show

  @DD
  Scenario Outline: 1. Valid user valid password
    When User click login link
    And Enter "<emailaddress>" as emaill address
    And Enter "<password>" as password
    And Click login Button
    And Welcome message shows "<username>"

    Examples:
      | emailaddress           | password    | username |
      | iivaan@shiftedtech.com | shiftedtech | Iftekhar |
      | shagor77@gmail.com     | shagor      | ben      |
      | mdalam7841@gmail.com   | shift786    | MD       |

  @DD
  Scenario Outline: 2. Invalid user valid password
    When User click login link
    And Enter "<emailaddress>" as emaill address
    And Enter "<password>" as password
    And Click login Button
    Then Invalid email or password message display

    Examples:
      | emailaddress            | password    | username |
      | iivaann@shiftedtech.com | shiftedtech | Iftekhar |
      | shagor77&@gmail.com     | shagor      | ben      |
      | mdalam784111@gmail.com  | shift786    | MD       |

  @DD
  Scenario Outline: 3. valid user Invalid password
    When User click login link
    And Enter "<emailaddress>" as emaill address
    And Enter "<password>" as password
    And Click login Button
    Then Invalid email or password message display

    Examples:
      | emailaddress           | password     | username |
      | iivaan@shiftedtech.com | shiftedtechh | Iftekhar |
      | shagor77@gmail.com     | shagorr      | ben      |
      | mdalam7841@gmail.com   | shift7866    | MD       |