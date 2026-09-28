import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { buildUser } from '../utils/testData';

test.describe('Registration', () => {
  test('new customer can register successfully', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const user = buildUser();

    await registerPage.goto();
    await registerPage.register(user);

    await expect(page.getByText('Your account was created successfully')).toBeVisible();
  });
});