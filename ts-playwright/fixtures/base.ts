import { test as base, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { buildUser, NewUser } from '../utils/testData';

type Fixtures = {
  registeredUser: NewUser;
};

export const test = base.extend<Fixtures>({
  registeredUser: async ({ page }, use) => {
    const user = buildUser();
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register(user);
    await expect(page.getByText('Your account was created successfully')).toBeVisible();

    await use(user);
  },
});

export { expect };