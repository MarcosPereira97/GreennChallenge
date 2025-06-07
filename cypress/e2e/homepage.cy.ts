describe("Homepage Product", () => {
  beforeEach(() => {
    cy.visitSite({ url: "/" });
  });

  it("Deve exibir imagens iguais para cada produto", () => {
    cy.loginSuccessfully({
      email: users.problem_user,
      password: users.password,
    });
    cy.validateSameImages();
  });

  it("Tentativa de adicionar qualquer produto ao carrinho", () => {
    cy.loginSuccessfully({
      email: users.problem_user,
      password: users.password,
    });
    cy.addProductToCart();
  });

  it("Deve exibir imagens diferentes para cada produto", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.validateDifferentImages();
  });

  it("Deve permitir adicionar qualquer produto ao carrinho", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.addProductToCart();
  });

  it("Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.compareProductInfo();
  });

  it("Deve ordenar corretamente por nome (Z até A)", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(1);
  });

  it("Deve ordenar corretamente por preço (menor para maior) ", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(2);
  });

  it("Deve ordenar corretamente por preço (maior para Menor)", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.sortItems(3);
  });

  it('Produto 4 exibe "Item Not Found" e valor com caracteres inválidos');
  it('Botão "Add to cart" deve funcionar em todos os produtos');
});
