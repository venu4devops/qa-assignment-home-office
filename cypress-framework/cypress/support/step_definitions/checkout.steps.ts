import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/InventoryPage";

Then("the result should be {string}", (result: string) => {
  if (result === "success") {
    InventoryPage.verifyInventoryPage();
  } else {
    cy.get("[data-test='error']").should("be.visible");
  }
});

When("the user adds one item to the cart", () => {
  InventoryPage.addFirstItemToCart();
});

Then("the cart count should be {string}", (count: string) => {
  InventoryPage.verifyCartCount(count);
});