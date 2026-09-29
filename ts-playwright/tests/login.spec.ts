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

    test('login fails for a username that does not exist', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(`no_such_user_${Date.now()}`, 'WrongPass@999');

    await expect(page).not.toHaveURL(/overview\.htm/);
  });

  test('login fails with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', '');

    await expect(page.getByText('Please enter a username and password')).toBeVisible();
  });
});