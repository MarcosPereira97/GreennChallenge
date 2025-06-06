describe("Testes de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Não deve permitir login com campo username em branco", () => {
    cy.validateLoginError(
      "",
      usuarios.password,
      "Epic sadface: Username is required"
    );
  });

  it("Não deve permitir login com campo password em branco", () => {
    cy.validateLoginError(
      usuarios.standard_user,
      "",
      "Epic sadface: Password is required"
    );
  });

  it("Deve exibir mensagem ao inserir usuário incorreto", () => {
    cy.validateLoginError(
      "usuario_invalido",
      usuarios.password,
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Deve exibir mensagem ao inserir senha incorreta", () => {
    cy.validateLoginError(
      usuarios.standard_user,
      "senha_incorreta",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Deve realizar login corretamente", () => {
    cy.loginSuccessfully(usuarios.standard_user, usuarios.password);
  });
});
