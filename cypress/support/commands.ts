/// <reference types="cypress" />

import { LoginPage } from "@pages/LoginPage";
import { ProductPage } from "@pages/ProductPage";

Cypress.Commands.add("login", (email: string, password: string) => {
  const loginPage = new LoginPage();

  loginPage.getUsernameField().type(email);
  loginPage.getPasswordField().type(password);
  loginPage.getLoginButton().click();
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("addProductToCart", () => {
  const productPage = new ProductPage();

  productPage
    .getGridList()
    .should("be.visible")
    .within(() => {
      productPage.getGridItem().first();
      productPage.getAddToCartButton().click();
      productPage
        .getRemoveFromCartButton()
        .should("be.visible")
        .and("have.text", "Remove");
    });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      addProductToCart(): Chainable<void>;
    }
  }
}
