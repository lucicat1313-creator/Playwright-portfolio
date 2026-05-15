# Playwright Test Suite

Automated test suite built with Playwright and TypeScript covering UI testing, E2E flows and API testing.

## Test Files

- **refresher.spec.ts** — UI interactions (forms, modals, sliders, file upload/download, iframes etc)
- **saucedemo.spec.ts** — Login authentication and full e-commerce flow (add to cart, checkout, order confirmation)
- **reqres.spec.ts** — API testing (GET, POST, PUT, DELETE)

## Tech Stack

- Playwright
- TypeScript
- Node.js

## How to Run

Install dependencies:
npm install
npx playwright install

Run all tests:
npx playwright test

Run a specific file:
npx playwright test saucedemo.spec.ts