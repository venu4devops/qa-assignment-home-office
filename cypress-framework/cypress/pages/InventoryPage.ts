class InventoryPage {
  pageTitle = ".title";
  cartBadge = ".shopping_cart_badge";

  verifyInventoryPage() {
    cy.get(this.pageTitle).should("have.text", "Products");
  }

  addFirstItemToCart() {
    cy.contains("Add to cart").first().click();
  }

  verifyCartCount(count: string) {
    cy.get(this.cartBadge).should("have.text", count);
  }
}

export default new InventoryPage();