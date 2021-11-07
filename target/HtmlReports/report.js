$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenariosGherkin.feature");
formatter.feature({
  "line": 1,
  "name": "Test sauceDemo WebSite - WizeLine QA Automation BootCamp",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check LOGIN is successful with a valid credentials",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-login-is-successful-with-a-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@LogInSauceWebSite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "you are in products page",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 6425085499,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4543178000,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 262573500,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.you_are_in_products_page()"
});
formatter.result({
  "duration": 2313849700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check LOGIN is not successful invalid credentials",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-login-is-not-successful-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter userName and wrong password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2171775999,
  "status": "passed"
});
formatter.match({
  "location": "TC2_InvalidLoginStep.user_enter_userName_and_wrong_password()"
});
formatter.result({
  "duration": 4456926001,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 127691000,
  "status": "passed"
});
formatter.match({
  "location": "TC2_InvalidLoginStep.an_error_message_is_displayed()"
});
formatter.result({
  "duration": 2057051100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check LOGOUT is successful",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-logout-is-successful",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@LogOut"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User going to Logg Off",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user is on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2150527200,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4445699201,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 185761500,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.User_going_to_Logg_Off()"
});
formatter.result({
  "duration": 6537179100,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 14739400,
  "status": "passed"
});
});