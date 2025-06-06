import { LoginPage } from "@pages/LoginPage";

let loginPage = new LoginPage();

Cypress.Commands.add("doLogin", (email?, password?, options?) => {
  if (email !== undefined && email.length > 0) {
    loginPage.getUsernameField().type(email);
  }

  if (password !== undefined && password.length > 0) {
    loginPage.getPasswordField().type(password, { log: false });
  }

  loginPage.getLoginButton().click();
});

Cypress.Commands.add("loginSuccessfully", (email, password) => {
  cy.doLogin(email, password);
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add(
  "validateLoginError",
  (email, password, expectedMessage) => {
    cy.doLogin(email, password);
    loginPage.getErrorMessage().should("have.text", expectedMessage);
  }
);
