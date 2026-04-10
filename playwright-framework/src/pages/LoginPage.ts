import { Page } from "playwright";

export default class LoginPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.locator("#user-name").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.locator("#login-button").click();
  }

  async verifyError(message: string) {
    const errorText = await this.page.locator("[data-test='error']").textContent();

    if (!errorText || !errorText.includes(message)) {
      throw new Error(`Expected error message to contain: ${message}`);
    }
  }
}