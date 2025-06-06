describe("Homepage", () => {
  let usuarios: any;

  beforeEach(() => {
    cy.fixture("usuarios").then((dados) => {
      usuarios = dados;
      cy.visit("/");
    });
  });

  it("Deve exibir imagens diferentes para cada produto", () => {
    cy.login(usuarios.problem_user, usuarios.password);
  });

  it("Deve permitir adicionar qualquer produto ao carrinho");
  it(
    "Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes"
  );
  it('Produto 4 exibe "Item Not Found" e valor com caracteres inválidos');
  it('Botão "Add to cart" deve funcionar em todos os produtos');
});
