describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve exibir imagens diferentes para cada produto", () => {});

  it("Deve permitir adicionar qualquer produto ao carrinho");
  it(
    "Deve manter nome, valor e imagem consistentes entre homepage e página de detalhes"
  );
  it('Produto 4 exibe "Item Not Found" e valor com caracteres inválidos');
  it('Botão "Add to cart" deve funcionar em todos os produtos');

  it("Deve ordenar corretamente por preço, nome e outros critérios");
});
