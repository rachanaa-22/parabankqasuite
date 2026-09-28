import { Page, Locator } from '@playwright/test';

export class AccountsOverviewPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Accounts Overview' });
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Log Out' }).click();
  }
}