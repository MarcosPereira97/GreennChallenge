import { SELECTORS } from "../seletores/seletores";

export class CheckoutPage {
  getFirstNameField() {
    return cy.getVisible(SELECTORS.checkout.first_name);
  }

  getLastnameField() {
    return cy.getVisible(SELECTORS.checkout.last_name);
  }

  getZipcodeField() {
    return cy.getVisible(SELECTORS.checkout.zipcode);
  }

  getContinueBtn() {
    return cy.getVisible(SELECTORS.checkout.continue_btn);
  }

  getErrorMessage() {
    return cy.getVisible(SELECTORS.checkout.message_error);
  }

  getCancelBtn() {
    return cy.getVisible(SELECTORS.checkout.cancel_btn);
  }

  getFinishBtn() {
    return cy.getVisible(SELECTORS.checkout.finish_btn);
  }

  getFinishedCheckout() {
    return cy.getVisible(SELECTORS.checkout.checkout_complete);
  }
}
