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
  "location": "LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 3471647200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 341530200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 193076000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.you_are_in_products_page()"
});
formatter.result({
  "duration": 193295000,
  "status": "passed"
});
});