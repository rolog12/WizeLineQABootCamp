# WizeLineQABootCamp
Technical Challenge QA Automation BootCamp WizeLine Academy - Rodrigo Garcia Colombia 

This Project Contains some Test Cases to Validate FrontEnd QA Automated Steps. 
WebSite https://www.saucedemo.com/ 
CUCUMBER and JUnit frameWork was used to develop this project under POM model.

Requirements:

*Selenium libraries = org.seleniumhq.selenium / 3.10.0

*JUnit = junit 4.11

*Browser Version : Chrome Version 95.0.4638.54

*ChromeDriver 95.

How to Play this Automation Project

1) Once you have opened the project Go to File : TestRunner path src\test\java 
2) Execute the project with the File "RunnerClass.java" as JUnit Test
3) DeFine in "tags" how many TestCases you want to Run. into @CucumberOptions annotation Ej: use Tags={@WizeLineBootCamp} to Run All Scenarios from the File "scenariosGherkin.feature" in "Feature" folder. Also you can Run any TestCase separatly tipying the specific Test Cases you want to Run with it's "TAG" expression
4) Consider using whatever IDE you like to Run This Cucumber POM Project. Ej: Eclipse
5) Please Find Html Reports , JSon Reports and Junit Reports every time you Run this project succesfully. Path: "target" Folder
