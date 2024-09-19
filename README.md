# toqio-automation-phase
I have chosen Cypress + javascript because I have been working with it for the last year, with the goal of continuing learning and going beyond what I already know.

### Install cypress
`npm install cypress --save-dev`

### Open Cypress to run the tests
`npm run test`

1. Click on E2E Testing
2. Select the desired browser (Chrome in my case)
3. Click on [Start E2E Testing in Chrome].
4. A new browser tab will open where you will see the specs (test groups) listed.
5. Select the spec you want to run
6. The tests will be executed
7. In the menu on the left we can see the result of the test.

_**NOTE:** I am aware that its not a good practice to leave commented out parts of the code that don't work. However I wanted to be totally transparent and show even the blocks I have come across_

_**NOTE:** After finishing the automation of the two test cases, I think that in the homepageView.js case it may not be a very maintainable test._
_Therefore, I think I would follow a strategy of meeting with the owners/stakeholders of it and try to understand which are the critical points (and therefore should be in the test) and which are the most non-maintainable (and look for another way to validate them)._