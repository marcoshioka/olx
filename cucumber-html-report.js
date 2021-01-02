const reporter = require('cucumber-html-reporter');
var os = require('os');
var date = new Date();

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  metadata: {
    "Platform": os.platform(),
    "Release": os.release(),
    "Date": date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
    "Hour": date.getHours() + ':' + date.getMinutes() + ' hs',
    "Executed": "Remote"
  }
};

reporter.generate(options);