import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

Given("the user opens the SauceDemo login page", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.visit();
});

When(
  "the user logs in with username {string} and password {string}",
  async function (this: CustomWorld, username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
  }
);

When("the user logs in with the following details", async function (
  this: CustomWorld,
  dataTable: DataTable
) {
  const loginPage = new LoginPage(this.page);
  const rows = dataTable.hashes();

  for (const row of rows) {
    await loginPage.login(row.username, row.password);
  }
});

Then("the products page should be displayed", async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.verifyProductsPage();
});

When("the user adds the first item to the cart", async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.addFirstItemToCart();
});

Then("the basket count should be {string}", async function (this: CustomWorld, count: string) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.verifyCartCount(count);
});