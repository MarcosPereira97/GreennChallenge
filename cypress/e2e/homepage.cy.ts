describe("Homepage Product", () => {
  beforeEach(() => {
    cy.visitSite({ url: "/" });
  });

  it("Deve exibir imagens diferentes para cada produto", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.validateDifferentImages();
    cy.screenshot();
  });

  it("Deve permitir adicionar qualquer produto ao carrinho", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.addProductToCart();
    cy.screenshot();
  });

  it("Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.compareProductInfo();
    cy.screenshot();
  });

  it("Deve ordenar corretamente por nome (Z até A)", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(1);
    cy.screenshot();
  });

  it("Deve ordenar corretamente por preço (menor para maior) ", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(2);
    cy.screenshot();
  });

  it("Deve ordenar corretamente por preço (maior para Menor)", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(3);
    cy.screenshot();
  });
});
