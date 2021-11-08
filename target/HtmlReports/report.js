$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenariosGherkin.feature");
formatter.feature({
  "line": 1,
  "name": "Test sauceDemo WebSite - WizeLine QA Automation BootCamp",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 36,
  "name": "Check in MainPage add multiple products",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-in-mainpage-add-multiple-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@addMultipleProducts"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user add multiple products",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "basket products are checked",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 5860177400,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4437414600,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 198391800,
  "status": "passed"
});
formatter.match({
  "location": "TC5_AddMultipleProducts.user_add_multiple_products()"
});
formatter.result({
  "duration": 8757513100,
  "status": "passed"
});
formatter.match({
  "location": "TC5_AddMultipleProducts.basket_products_are_checked()"
});
formatter.result({
  "duration": 2797790000,
  "status": "passed"
});
});