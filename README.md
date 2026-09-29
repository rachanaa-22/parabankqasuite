# ParaBank QA Automation Suite

End-to-end test automation for [ParaBank](https://parabank.parasoft.com), a public banking demo application, built to demonstrate real-world QA automation skills against banking workflows: registration, authentication, and account management.

## Why this project

Banking applications demand high reliability: a broken login or a silent account error has real consequences. This suite is structured the way a QA automation engineer would set up testing on a banking product, with reusable Page Objects, a shared setup fixture, and both positive and negative test cases.

## Tech stack

- **Playwright + TypeScript** — primary framework, using the Page Object Model
- **Node.js**
- **GitHub Actions** — tests run automatically on every push

## What's covered

| Area | Scenarios |
|---|---|
| Registration | New customer can register successfully |
| Login | Valid login, invalid password, empty credentials |

More flows (fund transfers, account management) are actively being added — see [Roadmap](#roadmap).

## Project structure