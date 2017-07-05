$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HeateclinicLoginWithDataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Heatclinic e-commerce Login Functionality",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "1. Valid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"\u003cemailaddress\u003e\" as emaill address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Welcome message shows \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "username"
      ],
      "line": 17,
      "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;1"
    },
    {
      "cells": [
        "iivaan@shiftedtech.com",
        "shiftedtech",
        "Iftekhar"
      ],
      "line": 18,
      "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;2"
    },
    {
      "cells": [
        "shagor77@gmail.com",
        "shagor",
        "ben"
      ],
      "line": 19,
      "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;3"
    },
    {
      "cells": [
        "mdalam7841@gmail.com",
        "shift786",
        "MD"
      ],
      "line": 20,
      "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4399018600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 192441800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 929448300,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 183956900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "1. Valid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"iivaan@shiftedtech.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"shiftedtech\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Welcome message shows \"Iftekhar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1987032500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iivaan@shiftedtech.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 304743900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiftedtech",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 235194300,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 904869800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iftekhar",
      "offset": 23
    }
  ],
  "location": "HeatclinicLoginSteps.welcome_message_shows(String)"
});
formatter.result({
  "duration": 175121500,
  "status": "passed"
});
formatter.after({
  "duration": 6921451300,
  "status": "passed"
});
formatter.before({
  "duration": 8603107600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 707690700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 1772616200,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 231866000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "1. Valid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"shagor77@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"shagor\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Welcome message shows \"ben\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 2016422000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagor77@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 533542000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagor",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 261752100,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 667037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ben",
      "offset": 23
    }
  ],
  "location": "HeatclinicLoginSteps.welcome_message_shows(String)"
});
formatter.result({
  "duration": 489841100,
  "status": "passed"
});
formatter.after({
  "duration": 8203876600,
  "status": "passed"
});
formatter.before({
  "duration": 3620831800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 63621300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 1033452400,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 325820700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "1. Valid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;1.-valid-user-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"mdalam7841@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter \"shift786\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Welcome message shows \"MD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1787549500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdalam7841@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 218261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shift786",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 221964500,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 979775100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MD",
      "offset": 23
    }
  ],
  "location": "HeatclinicLoginSteps.welcome_message_shows(String)"
});
formatter.result({
  "duration": 147332900,
  "status": "passed"
});
formatter.after({
  "duration": 7615264100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "2. Invalid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enter \"\u003cemailaddress\u003e\" as emaill address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "username"
      ],
      "line": 31,
      "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;1"
    },
    {
      "cells": [
        "iivaann@shiftedtech.com",
        "shiftedtech",
        "Iftekhar"
      ],
      "line": 32,
      "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;2"
    },
    {
      "cells": [
        "shagor77\u0026@gmail.com",
        "shagor",
        "ben"
      ],
      "line": 33,
      "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;3"
    },
    {
      "cells": [
        "mdalam784111@gmail.com",
        "shift786",
        "MD"
      ],
      "line": 34,
      "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3316809900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 86002400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 951065300,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 195281100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "2. Invalid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enter \"iivaann@shiftedtech.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter \"shiftedtech\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 992609500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iivaann@shiftedtech.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 267585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiftedtech",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 193673700,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 657617800,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 175855600,
  "status": "passed"
});
formatter.after({
  "duration": 3548044500,
  "status": "passed"
});
formatter.before({
  "duration": 3142462300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 117059600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 992014600,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 188388000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "2. Invalid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enter \"shagor77\u0026@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter \"shagor\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1256713300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagor77\u0026@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 253628600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagor",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 178121500,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 777526500,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 182150200,
  "status": "passed"
});
formatter.after({
  "duration": 3385545500,
  "status": "passed"
});
formatter.before({
  "duration": 3407762100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 67910700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 1050340100,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 171994100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "2. Invalid user valid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;2.-invalid-user-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enter \"mdalam784111@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter \"shift786\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1466548000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdalam784111@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 498377600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shift786",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 219641900,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 592318500,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 174611200,
  "status": "passed"
});
formatter.after({
  "duration": 3490216700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "3. valid user Invalid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"\u003cemailaddress\u003e\" as emaill address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "username"
      ],
      "line": 45,
      "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;1"
    },
    {
      "cells": [
        "iivaan@shiftedtech.com",
        "shiftedtechh",
        "Iftekhar"
      ],
      "line": 46,
      "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;2"
    },
    {
      "cells": [
        "shagor77@gmail.com",
        "shagorr",
        "ben"
      ],
      "line": 47,
      "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;3"
    },
    {
      "cells": [
        "mdalam7841@gmail.com",
        "shift7866",
        "MD"
      ],
      "line": 48,
      "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3334037500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 294504200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 922642800,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 190417700,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "3. valid user Invalid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"iivaan@shiftedtech.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Enter \"shiftedtechh\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1212432900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iivaan@shiftedtech.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 231002200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiftedtechh",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 181047400,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 403669800,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 152979300,
  "status": "passed"
});
formatter.after({
  "duration": 3353011800,
  "status": "passed"
});
formatter.before({
  "duration": 3989444300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 166252800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 869235100,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 163086500,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "3. valid user Invalid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"shagor77@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Enter \"shagorr\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1240319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagor77@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 572988000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shagorr",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 185678200,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 462151800,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 161117600,
  "status": "passed"
});
formatter.after({
  "duration": 3913226400,
  "status": "passed"
});
formatter.before({
  "duration": 9237322200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browse to the url \"http://heatclinic.shiftedtech.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Heatclinic home page should show",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.as_a_not_validated_user()"
});
formatter.result({
  "duration": 732628900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://heatclinic.shiftedtech.com/",
      "offset": 19
    }
  ],
  "location": "HeatclinicLoginSteps.browse_to_the_url(String)"
});
formatter.result({
  "duration": 2046205600,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.heatclinic_home_page_should_show()"
});
formatter.result({
  "duration": 179625800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "3. valid user Invalid password",
  "description": "",
  "id": "heatclinic-e-commerce-login-functionality;3.-valid-user-invalid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@DD"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"mdalam7841@gmail.com\" as emaill address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Enter \"shift7866\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Invalid email or password message display",
  "keyword": "Then "
});
formatter.match({
  "location": "HeatclinicLoginSteps.user_click_login_button()"
});
formatter.result({
  "duration": 1879396500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdalam7841@gmail.com",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_emaill_address(String)"
});
formatter.result({
  "duration": 323633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shift7866",
      "offset": 7
    }
  ],
  "location": "HeatclinicLoginSteps.enter_as_password(String)"
});
formatter.result({
  "duration": 187431100,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.click_login()"
});
formatter.result({
  "duration": 490013600,
  "status": "passed"
});
formatter.match({
  "location": "HeatclinicLoginSteps.invalid_email_or_password_message_display()"
});
formatter.result({
  "duration": 313020100,
  "status": "passed"
});
formatter.after({
  "duration": 3489331300,
  "status": "passed"
});
});