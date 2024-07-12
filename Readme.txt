
This README file provides instructions and information about the Cypress automation test suite for easy generator practice page

#Project Overview
The server is run in port 8084 by running command npm start in the server folder
The task.html file is run via http-server in port 8084. It is accessible via http://127.0.0.1:8084/
This automation suite cover every element in the practice page using Cypress
The automation framework follows page object design pattern with workflow driven approad suitable for e2e regression testing.
In order to run for the e2e regression workflow, it navigates to the practice page and execute the workflow.
The data validation is separated in the fixture file.
The objects are organized in the Objects file, allowing locators to be easily updated when HTML elements change, facilitating future refactoring.
The user worflows are modularized for the purpose of reusability across other scenarios.


#Prerequisites
Node.js and npm installed on your machine.

#Installation
Clone the repository: git clone 
Navigate to the project directory: cd [project directory]
Install dependencies: npm install



#Test Execution
Server:
    Run the server by navigating to $/Eg/server and run npm start
    Open chrome and enter http://127.0.0.1:8084/
Test Automation:
    Run the Cypress tests using one of the following methods:
    Run tests in the Cypress Test Runner: " npm run cypress:run" or "npm run cypress:open"
    Method 1:
        Run tests headlessly in the default browser:
            Open a terminal in the project directory.
            Navigate to $/Eg/testAutomation/cypress
            npm run cypress:run --browser chrome
    Method 2:
            Open a terminal in the project directory.
            Navigate to $/Eg/testAutomation/cypress
            npm run cypress:open
            Run the spec file


#Test Structure
The Cypress test suite is structured as follows:
$Eg/testAutomation/cypress/e2e/eg/egPractice/egPracticeObjects: This is the entry point or the spec file, where the user workflow are written.
$Eg/testAutomation/cypress/e2e/eg/egPractice/egPracticePage: Contains all the page actions, written in functions, which can be reused in other user workflows.
$Eg/testAutomation/cypress/e2e/eg/egPractice/egPracticeObjects: Contains the objects required to identify the DOM elementts for the page functions. 
$Eg/testAutomation/cypress/e2e/eg/egPractice/egPracticeFixtures: Contains the Json data file, which contains all data and verification points for the user workflow.
$\cypress\support:
	$\cypress\support\e2e.ts: End-to-end(e2e) test-related configurations
	$\cypress\support\commands.ts: Reusable custom commands

#Troubleshooting
If you encounter any issues or errors, try the following steps:
Verify nodejs is installed correctly
Verify that all dependencies are installed correctly.
Check the configuration settings and environment variables.
Ensure that the test environment is set up properly.


