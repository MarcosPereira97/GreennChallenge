import { SELECTORS } from "../seletores/seletores";

export class CartPage {
  getCartButton() {
    return cy.getVisible(SELECTORS.cart.cart_btn);
  }

  getCartBadge() {
    return cy.getVisible(SELECTORS.cart.cart_badge);
  }

  getGotoCheckout() {
    return cy.getVisible(SELECTORS.cart.checkout_btn);
  }
}
