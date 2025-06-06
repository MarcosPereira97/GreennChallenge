import { SELECTORS } from "../seletores/seletores";

export class CartPage {
  getCartButton() {
    return cy.get(SELECTORS.cart.cart_btn);
  }
}
