import { Page } from "playwright";

export default class InventoryPage {
  constructor(private page: Page) {}

  async verifyProductsPage() {
    const title = await this.page.locator(".title").textContent();

    if (title !== "Products") {
      throw new Error(`Expected page title to be Products but got ${title}`);
    }
  }

  async addFirstItemToCart() {
    await this.page.locator("button:has-text('Add to cart')").first().click();
  }

  async verifyCartCount(count: string) {
    const badgeText = await this.page.locator(".shopping_cart_badge").textContent();

    if (badgeText !== count) {
      throw new Error(`Expected cart count ${count} but got ${badgeText}`);
    }
  }
}