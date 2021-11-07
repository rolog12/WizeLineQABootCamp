$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenariosGherkin.feature");
formatter.feature({
  "line": 1,
  "name": "Test sauceDemo WebSite - WizeLine QA Automation BootCamp",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp",
  "keyword": "Feature"
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
  "duration": 6585784700,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4485570100,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 299159500,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.User_going_to_Logg_Off()"
});
formatter.result({
  "duration": 6680131300,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 21402400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Check products is sorted by price lowToHigh",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-products-is-sorted-by-price-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@SortedByPrice"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "products are sorted by price lowToHigh",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "sorted products are checked",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2134029100,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4422155500,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 162711100,
  "status": "passed"
});
formatter.match({
  "location": "TC4_SortByPrice.products_are_sorted_by_price_lowToHigh()"
});
formatter.result({
  "duration": 223704800,
  "status": "passed"
});
formatter.match({
  "location": "TC4_SortByPrice.sorted_products_are_checked()"
});
formatter.result({
  "duration": 200392300,
  "status": "passed"
});
});