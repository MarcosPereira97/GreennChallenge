import { SELECTORS } from "../seletores/seletores";

export class ProductPage {
  getGridList() {
    return cy.getVisible(SELECTORS.grid.grid_list);
  }

  getGridItem() {
    return cy.getVisible(SELECTORS.grid.grid_item);
  }

  getAddToCartButton() {
    return cy.getVisible(SELECTORS.grid.add_to_cart_btn);
  }

  getRemoveFromCartButton() {
    return cy.getVisible(SELECTORS.grid.remove_to_cart_btn);
  }

  getProductImage() {
    return cy.getVisible(SELECTORS.grid.pug_img);
  }

  getProductName() {
    return cy.getVisible(SELECTORS.grid.product_name);
  }

  getProductDescription() {
    return cy.getVisible(SELECTORS.grid.product_description);
  }

  getProductPrice() {
    return cy.getVisible(SELECTORS.grid.product_price);
  }

  getImageDetail() {
    return cy.getVisible(SELECTORS.grid.img_detail);
  }

  getGridImg() {
    return cy.getVisible(SELECTORS.grid.grid_img);
  }

  getSortItems() {
    return cy.getVisible(SELECTORS.grid.sort_items);
  }
}
