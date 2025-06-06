import { SELECTORS } from "../seletores/seletores";

export class ProductPage {
  getGridList() {
    return cy.get(SELECTORS.grid.grid_list).should("be.visible");
  }

  getGridItem() {
    return cy.get(SELECTORS.grid.grid_item).should("be.visible");
  }

  getAddToCartButton() {
    return cy.get(SELECTORS.grid.add_to_cart_btn).should("be.visible");
  }

  getRemoveFromCartButton() {
    return cy.get(SELECTORS.grid.remove_to_cart_btn).should("be.visible");
  }

  getProductImage() {
    return cy.get(SELECTORS.grid.pug_img).should("be.visible");
  }

  getProductName() {
    return cy.get(SELECTORS.grid.product_name).should("be.visible");
  }

  getProductDescription() {
    return cy.get(SELECTORS.grid.product_description).should("be.visible");
  }

  getProductPrice() {
    return cy.get(SELECTORS.grid.product_price).should("be.visible");
  }

  getImageDetail() {
    return cy.get(SELECTORS.grid.img_detail);
  }

  getGridImg() {
    return cy.get(SELECTORS.grid.grid_img);
  }

  getSortItems() {
    return cy.get(SELECTORS.grid.sort_items);
  }
}
