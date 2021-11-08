Feature: Test sauceDemo WebSite - WizeLine QA Automation BootCamp

@LogInSauceWebSite
Scenario: Check LOGIN is successful with a valid credentials
    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then you are in products page

@invalidLogin   
Scenario: Check LOGIN is not successful invalid credentials

    Given user is on LOGIN page Scenario
    When user enter userName and wrong password
    And clicks on LOGIN button
    Then an error message is displayed
@LogOut
Scenario: Check LOGOUT is successful

    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then User going to Logg Off
    And user is on Login Page
    
@SortedByPrice 
Scenario: Check products is sorted by price lowToHigh

    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then products are sorted by price lowToHigh
    And sorted products are checked
    
 @addMultipleProducts
 Scenario: Check in MainPage add multiple products

    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then user add multiple products
    And basket products are checked
    
 @addSauceLabsProduct
 Scenario: Check add specific product

    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then user add Specific product
 
 @CompletePurchase
 Scenario: Check purchase is completed

    Given user is on LOGIN page Scenario
    When user enter userName and password
    And clicks on LOGIN button
    Then user add final product
    And purchase is completed 
    And navigate to Order Confirmation Page
    