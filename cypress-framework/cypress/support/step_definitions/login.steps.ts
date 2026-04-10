import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

Given("the user is on the login page", () => {
  LoginPage.visit();
});

When("the user logs in with the following credentials", (dataTable: DataTable) => {
  const rows = dataTable.hashes();

  rows.forEach((row, index) => {
    LoginPage.login(row.username, row.password);
    InventoryPage.verifyInventoryPage();

    if (index < rows.length - 1) {
      LoginPage.visit();
    }
  });
});

When("the user enters username {string} and password {string}", (username: string, password: string) => {
  LoginPage.login(username, password);
});

Then("the inventory page should be displayed", () => {
  InventoryPage.verifyInventoryPage();
});

Then("an error message {string} should be displayed", (message: string) => {
  LoginPage.verifyError(message);
});