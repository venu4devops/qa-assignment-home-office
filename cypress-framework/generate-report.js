const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/cucumber-html-report",
  metadata: {
    browser: {
      name: "electron",
      version: "138"
    },
    device: "Local machine",
    platform: {
      name: "windows",
      version: "11"
    }
  },
  customData: {
    title: "Execution Info",
    data: [
      { label: "Framework", value: "Cypress + TypeScript + Cucumber" }
    ]
  }
});