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

  getRemoveBtn() {
    return cy.getVisible(SELECTORS.cart.remove_product_btn);
  }

  getCartItems() {
    return cy.getVisible(SELECTORS.cart.cart_items);
  }

  getRemovedItem() {
    return cy.get(SELECTORS.cart.removed_item);
  }
}
