import { CartPage } from "@pages/CartPage";
import { CheckoutData } from "cypress/interfaces/TestData";
import { CheckoutPage } from "@pages/CheckoutPage";

let checkoutPage = new CheckoutPage();
let cartPage = new CartPage();

Cypress.Commands.add("fillCheckoutForm", (data?: CheckoutData) => {
  cartPage.getGotoCheckout().click();

  if (data?.username) {
    checkoutPage.getFirstNameField().type(data.username);
  }

  if (data?.lastname) {
    checkoutPage.getLastnameField().type(data.lastname);
  }

  if (data?.zipcode) {
    checkoutPage.getZipcodeField().type(data.zipcode);
  }
});

Cypress.Commands.add("validateCheckoutError", (data: CheckoutData) => {
  cy.fillCheckoutForm(data);
  checkoutPage.getContinueBtn().click();
  expect(
    checkoutPage.getErrorMessage().should("have.text", data.expectedMessage)
  );
});

Cypress.Commands.add("validateWord", (data: CheckoutData) => {
  cy.fillCheckoutForm(data);
  const validateLetter = data.lastname?.slice(-1);
  expect(
    checkoutPage.getFirstNameField().should("contain.value", validateLetter)
  );
});

Cypress.Commands.add("finishCheckout", (data: CheckoutData) => {
  checkoutPage.getContinueBtn().click();
  checkoutPage.getFinishBtn().click();
  expect(
    checkoutPage.getFinishedCheckout().should("contain", data.expectedMessage)
  );
});
