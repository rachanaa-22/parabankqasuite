import { Page } from '@playwright/test';
import { NewUser } from '../utils/testData';

export class RegisterPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/parabank/register.htm');
  }

  async register(user: NewUser) {
    await this.page.locator('[id="customer.firstName"]').fill(user.firstName);
    await this.page.locator('[id="customer.lastName"]').fill(user.lastName);
    await this.page.locator('[id="customer.address.street"]').fill(user.address);
    await this.page.locator('[id="customer.address.city"]').fill(user.city);
    await this.page.locator('[id="customer.address.state"]').fill(user.state);
    await this.page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
    await this.page.locator('[id="customer.phoneNumber"]').fill(user.phone);
    await this.page.locator('[id="customer.ssn"]').fill(user.ssn);
    await this.page.locator('[id="customer.username"]').fill(user.username);
    await this.page.locator('[id="customer.password"]').fill(user.password);
    await this.page.locator('#repeatedPassword').fill(user.password);
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
}