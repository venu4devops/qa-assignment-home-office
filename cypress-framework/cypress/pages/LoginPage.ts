class LoginPage {
  usernameInput = "#user-name";
  passwordInput = "#password";
  loginButton = "#login-button";
  errorMessage = "[data-test='error']";

  visit() {
    cy.visit("/");
  }

  login(username: string, password: string) {
    cy.get(this.usernameInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password);
    cy.get(this.loginButton).click();
  }

  verifyError(message: string) {
    cy.get(this.errorMessage).should("contain.text", message);
  }
}

export default new LoginPage();