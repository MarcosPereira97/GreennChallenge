describe("Login", () => {
  let usuarios: any;

  beforeEach(() => {
    cy.fixture("usuarios").then((dados) => {
      usuarios = dados;
      cy.visit("/");
    });
  });

  it("Não deve permitir login com campo username em branco");
  it("Não deve permitir login com campo password em branco");
  it("Deve exibir mensagem ao inserir usuário incorreto");
  it("Deve exibir mensagem ao inserir senha incorreta");
});
