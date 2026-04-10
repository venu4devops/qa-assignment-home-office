# Playwright BDD Automation Framework (TypeScript)

## Overview

This repository contains a lightweight automation framework built using Playwright, TypeScript, and Cucumber (BDD).

The framework is designed to demonstrate a simple and maintainable approach for UI automation using Page Object Model and business-readable BDD scenarios.

---

## Approach

The focus while building this framework was on:

- Keeping the design simple and modular
- Using Page Object Model for separation of concerns
- Writing readable feature files using Gherkin
- Keeping step definitions reusable and easy to maintain
- Generating clear HTML execution reports

---

## Tech Stack

- Playwright
- TypeScript
- Cucumber (BDD)
- Node.js
- multiple-cucumber-html-reporter

---

## Project Structure

```text
playwright-framework
 ├─ features              # Feature files
 ├─ reports               # Execution reports
 ├─ src
 │  ├─ hooks              # Cucumber hooks
 │  ├─ pages              # Page Object Model classes
 │  ├─ steps              # Step definitions
 │  └─ support            # World/context
 ├─ cucumber.js
 ├─ generate-report.js
 ├─ package.json
 ├─ tsconfig.json
 └─ README.md

 Test Coverage

The framework includes:

Successful login
Login using data table
Add item to cart

Setup Instructions
Install Node.js

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Execution

Run all tests:
npm test

Generate report:

npm run report:generate

Open the report:
reports/playwright-html-report/index.html

