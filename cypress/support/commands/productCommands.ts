import { ProductPage } from "@pages/ProductPage";

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
