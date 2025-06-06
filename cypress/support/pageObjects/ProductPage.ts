import { SELECTORS } from "../seletores/seletores";

export class ProductPage {
  getGridList() {
    return cy.get(SELECTORS.grid.grid_list);
  }

  getGridItem() {
    return cy.get(SELECTORS.grid.grid_item);
  }

  getAddToCartButton() {
    return cy.get(SELECTORS.grid.add_to_cart_btn);
  }

  getRemoveFromCartButton() {
    return cy.get(SELECTORS.grid.remove_to_cart_btn);
  }
}
