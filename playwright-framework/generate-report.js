const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/playwright-html-report",
  metadata: {
    browser: {
      name: "chromium",
      version: "latest"
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
      { label: "Framework", value: "Playwright + TypeScript + Cucumber" }
    ]
  }
});