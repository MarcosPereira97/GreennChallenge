describe("Homepage Products - problem_user", () => {
  beforeEach(() => {
    cy.fixture("usuarios").then((dados) => {
      usuarios = dados;
      cy.visit("/");
    });
  });

  it("Deve exibir imagens iguais para cada produto", () => {
    cy.loginSuccessfully(usuarios.problem_user, usuarios.password);
    cy.validateSameImages();
  });

  it("Tentativa de adicionar qualquer produto ao carrinho", () => {
    cy.loginSuccessfully(usuarios.problem_user, usuarios.password);
    cy.addProductToCart();

  });

  it('Produto 4 exibe "Item Not Found" e valor com caracteres inválidos');
  it('Botão "Add to cart" deve funcionar em todos os produtos');
});

describe("Homepage Products - standard_user", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve exibir imagens diferentes para cada produto", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.validateDifferentImages();
  });

  it("Deve permitir adicionar qualquer produto ao carrinho", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.addProductToCart();
  });

  it("Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.compareProductInfo();
  });

  it("Deve ordenar corretamente por nome (Z até A)", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.sortItems(1);
  });

  it("Deve ordenar corretamente por preço (menor para maior) ", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.sortItems(2);
  });

  it("Deve ordenar corretamente por preço (maior para Menor)", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
    cy.sortItems(3);
  });
});
