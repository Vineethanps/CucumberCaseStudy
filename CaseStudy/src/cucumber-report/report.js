$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/casestudy/casestudy2.feature");
formatter.feature({
  "name": "login to TestMeApp",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url is given as \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password as \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "user is in homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "passWord"
      ]
    },
    {
      "cells": [
        "Granger",
        "potter123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url is given as \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy2.url_is_given_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Granger\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy2.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"potter123\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy2.user_types_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy2.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy2.user_is_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/casestudy/casestudy3.feature");
formatter.feature({
  "name": "Search Engine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TestMeApp SearchEngine",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on search button and types\"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on find details",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on cart symbol",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on checkoutbutton",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on proceedtopay",
  "keyword": "And "
});
formatter.step({
  "name": "user selects on AndhraBank",
  "keyword": "And "
});
formatter.step({
  "name": "usert clicks on continue",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button1",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "passWord",
        "data"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123",
        "HeadPhone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TestMeApp SearchEngine",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy3.url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on search button and types\"HeadPhone\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_search_button_and_types(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on find details",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_find_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cart symbol",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_cart_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on checkoutbutton",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.usert_clicks_on_checkoutbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on proceedtopay",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.usert_clicks_on_cproceedtopay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects on AndhraBank",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.usert_selects_on_Andhrabank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usert clicks on continue",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy3.usert_clicks_on_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button1",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy3.user_clicks_on_login_button(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/casestudy/casestudy4.feature");
formatter.feature({
  "name": "Search Engine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TestMeApp SearchEngine",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url for TestMeApp \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username field \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password  field \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks search button and types\"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks find details",
  "keyword": "And "
});
formatter.step({
  "name": "TestMeApp doesn\u0027t display the cart icon",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "passWord",
        "data"
      ]
    },
    {
      "cells": [
        "lalitha",
        "password123",
        "HeadPhone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TestMeApp SearchEngine",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url for TestMeApp \"http://10.232.237.143:443/TestMeApp/login.htm\"",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy4.url_for_TestMeApp(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username field \"lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy4.user_enters_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password  field \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy4.user_enters_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy4.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search button and types\"HeadPhone\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy4.user_clicks_search_button_and_types(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks find details",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy4.user_clicks_find_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TestMeApp doesn\u0027t display the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy4.testmeapp_doesn_t_display_the_cart_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/casestudy/register.feature");
formatter.feature({
  "name": "Register feature for test me app",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "url of testmeapp \"http://10.232.237.143:443/TestMeApp/RegisterUser.htm\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.url_of_testmeapp(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Granger\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"vini\" as firstname",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"reddy\" as lastname",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"potter123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"potter123\" as confirmpassword",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_confirmpassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Female\" as gender",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_on_as_gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"granger@email.com\" as email",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"8765364234\" as mobilenumber",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_mobilenumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"2/12/1998\"as DOB",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_DOB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"fhdrykm.rfrtuertqaerhnhgm\" as address",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"what is your Birth place?\" security question",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_selects_security_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"pulivendula\" as answer",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_enters_as_answer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on REGISTER",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_clicks_on_REGISTER()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Login]\u003e but was:\u003c[Sign Up]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat casestudy.Register.user_clicks_on_REGISTER(Register.java:119)\r\n\tat ✽.user clicks on REGISTER(file:src/test/resources/casestudy/register.feature:16)\r\n",
  "status": "failed"
});
});