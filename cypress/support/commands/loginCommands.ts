import { LoginPage } from "@pages/LoginPage";

Cypress.Commands.add("login", (email: string, password: string) => {
  const loginPage = new LoginPage();

  loginPage.getUsernameField().type(email);
  loginPage.getPasswordField().type(password);
  loginPage.getLoginButton().click();
  cy.url().should("include", "/inventory.html");
});
