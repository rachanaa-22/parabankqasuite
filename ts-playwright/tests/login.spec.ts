import { test, expect } from '../fixtures/base';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';

test.describe('Login', () => {
  test('registered customer can log in with valid credentials', async ({ page, registeredUser }) => {
    const overview = new AccountsOverviewPage(page);
    const loginPage = new LoginPage(page);

    await overview.logout();
    await loginPage.login(registeredUser.username, registeredUser.password);

    await expect(overview.heading).toBeVisible();
  });

  test('login fails with a wrong password', async ({ page, registeredUser }) => {
    const overview = new AccountsOverviewPage(page);
    const loginPage = new LoginPage(page);

    await overview.logout();
    await loginPage.login(registeredUser.username, 'WrongPass@999');

    await expect(page.getByText('The username and password could not be verified')).toBeVisible();
  });

  test('login fails with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', '');

    await expect(page.getByText('Please enter a username and password')).toBeVisible();
  });
});