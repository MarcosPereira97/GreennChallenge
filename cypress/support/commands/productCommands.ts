import { CartPage } from "@pages/CartPage";
import { ProductPage } from "@pages/ProductPage";

let productPage = new ProductPage();
let cartPage = new CartPage();

let firstImageSrc: string;

let productData: {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

Cypress.Commands.add("validateSameImages", () => {
  productPage
    .getProductImage()
    .first()
    .invoke("attr", "src")
    .then((src) => {
      firstImageSrc = src as string;
    });

  productPage.getProductImage().each(($img) => {
    cy.wrap($img).should("have.attr", "src", firstImageSrc);
  });
});

Cypress.Commands.add("validateDifferentImages", () => {
  let allSrcs: string[] = [];

  productPage
    .getGridItem()
    .find("img")
    .each(($img) => {
      const src = $img.attr("src");
      expect(allSrcs).to.not.include(src);
      allSrcs.push(src!);
    });
});

Cypress.Commands.add("addProductToCart", () => {
  productPage
    .getGridList()

    .within(() => {
      productPage.getGridItem().first();
      productPage.getAddToCartButton().click();
      productPage.getRemoveFromCartButton().and("have.text", "Remove");
    });

  expect(cartPage.getCartBadge().should("exist"));
});

Cypress.Commands.add("compareProductInfo", () => {
  cy.then(() => {
    productData = {
      nome: Cypress.$(".inventory_item_name").first().text(),
      descricao: Cypress.$(".inventory_item_desc").first().text(),
      preco: Cypress.$(".inventory_item_price").first().text(),
      imagem: Cypress.$(".inventory_item img").first().attr("src") || "",
    };
  }).then(() => {
    cy.accessProductPage();

    productPage.getProductName().should("have.text", productData.nome);
    productPage
      .getProductDescription()
      .should("have.text", productData.descricao);
    productPage.getProductPrice().should("have.text", productData.preco);
    productPage
      .getImageDetail()
      .each(($img) =>
        cy.wrap($img).should("have.attr", "src", productData.imagem)
      );
  });
});

Cypress.Commands.add("sortItems", (sortOption) => {
  cy.then(() => {
    productData = {
      nome: Cypress.$(".inventory_item_name").first().text(),
      descricao: Cypress.$(".inventory_item_desc").first().text(),
      preco: Cypress.$(".inventory_item_price").first().text(),
      imagem: Cypress.$(".inventory_item img").first().attr("src") || "",
    };
  }).then(() => {
    cy.log(`Informação capturada: ${productData.nome}`);
    cy.log(`Informação capturada: ${productData.descricao}`);
    cy.log(`Informação capturada: ${productData.preco}`);
    cy.log(`Informação capturada: ${productData.imagem}`);

    productPage.getSortItems().select(sortOption);

    productPage
      .getProductName()
      .first()
      .should("not.have.text", productData.nome);
    productPage
      .getProductDescription()
      .first()
      .should("not.have.text", productData.descricao);
    productPage
      .getProductPrice()
      .first()
      .should("not.have.text", productData.preco);
    productPage
      .getGridImg()
      .first()
      .find("img")
      .should("not.have.attr", "src", productData.imagem);
  });
});

Cypress.Commands.add("accessProductPage", () => {
  productPage.getProductName().first().click();
});

Cypress.Commands.add("accessCartPage", () => {
  cartPage.getCartButton().click();
});
