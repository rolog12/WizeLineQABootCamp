$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenariosGherkin.feature");
formatter.feature({
  "line": 2,
  "name": "Test sauceDemo WebSite - WizeLine QA Automation BootCamp",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@WizeLineBootCamp"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Check LOGIN is successful with a valid credentials",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-login-is-successful-with-a-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LogInSauceWebSite"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "you are in products page",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 5719060900,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4436297600,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 216211800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.you_are_in_products_page()"
});
formatter.result({
  "duration": 2240962900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check LOGIN is not successful invalid credentials",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-login-is-not-successful-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter userName and wrong password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2126093300,
  "status": "passed"
});
formatter.match({
  "location": "TC2_InvalidLoginStep.user_enter_userName_and_wrong_password()"
});
formatter.result({
  "duration": 4352426800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 109270000,
  "status": "passed"
});
formatter.match({
  "location": "TC2_InvalidLoginStep.an_error_message_is_displayed()"
});
formatter.result({
  "duration": 2047306900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check LOGOUT is successful",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-logout-is-successful",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@LogOut"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User going to Logg Off",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user is on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2098358500,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4368847300,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 151147000,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.User_going_to_Logg_Off()"
});
formatter.result({
  "duration": 6414427800,
  "status": "passed"
});
formatter.match({
  "location": "TC3_LogOff.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 6538000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Check products is sorted by price lowToHigh",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-products-is-sorted-by-price-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@SortedByPrice"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "products are sorted by price lowToHigh",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "sorted products are checked",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2107240400,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4353846900,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 117319100,
  "status": "passed"
});
formatter.match({
  "location": "TC4_SortByPrice.products_are_sorted_by_price_lowToHigh()"
});
formatter.result({
  "duration": 127619600,
  "status": "passed"
});
formatter.match({
  "location": "TC4_SortByPrice.sorted_products_are_checked()"
});
formatter.result({
  "duration": 119202700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Check in MainPage add multiple products",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-in-mainpage-add-multiple-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@addMultipleProducts"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user add multiple products",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "basket products are checked",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2108681100,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4339310800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 135058900,
  "status": "passed"
});
formatter.match({
  "location": "TC5_AddMultipleProducts.user_add_multiple_products()"
});
formatter.result({
  "duration": 8611312500,
  "status": "passed"
});
formatter.match({
  "location": "TC5_AddMultipleProducts.basket_products_are_checked()"
});
formatter.result({
  "duration": 2814148500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Check add specific product",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-add-specific-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@addSauceLabsProduct"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user add Specific product",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2134758900,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4361023000,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 100899800,
  "status": "passed"
});
formatter.match({
  "location": "TC6_AddSpecificProd.user_add_Specific_product()"
});
formatter.result({
  "duration": 2807645500,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Check purchase is completed",
  "description": "",
  "id": "test-saucedemo-website---wizeline-qa-automation-bootcamp;check-purchase-is-completed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@CompletePurchase"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "user is on LOGIN page Scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "user enter userName and password",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user add final product",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "purchase is completed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "navigate to Order Confirmation Page",
  "keyword": "And "
});
formatter.match({
  "location": "TC1_LoginStep.user_is_on_LOGIN_page_Scenario()"
});
formatter.result({
  "duration": 2137434400,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.user_enter_userName_and_password()"
});
formatter.result({
  "duration": 4379796800,
  "status": "passed"
});
formatter.match({
  "location": "TC1_LoginStep.clicks_on_LOGIN_button()"
});
formatter.result({
  "duration": 133538100,
  "status": "passed"
});
formatter.match({
  "location": "TC7_CompletePurchase.user_add_final_product()"
});
formatter.result({
  "duration": 2190165500,
  "status": "passed"
});
formatter.match({
  "location": "TC7_CompletePurchase.purchase_is_completed()"
});
formatter.result({
  "duration": 14864533700,
  "status": "passed"
});
formatter.match({
  "location": "TC7_CompletePurchase.navigate_to_Order_Confirmation_Page()"
});
formatter.result({
  "duration": 2066750100,
  "status": "passed"
});
});