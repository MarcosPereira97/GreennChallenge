describe("Login", () => {
  beforeEach(() => {
    cy.visitSite({ url: "/" });
  });

  it("Não deve permitir login com campo username em branco", () => {
    cy.validateLoginError({
      password: users.password,
      expectedMessage: "Epic sadface: Username is required",
    });
    cy.screenshot();
  });

  it("Não deve permitir login com campo password em branco", () => {
    cy.validateLoginError({
      email: users.standard_user,
      expectedMessage: "Epic sadface: Password is required",
    });
    cy.screenshot();
  });

  it("Deve exibir mensagem ao inserir usuário incorreto", () => {
    cy.validateLoginError({
      email: "invalid_user",
      password: users.password,
      expectedMessage:
        "Epic sadface: Username and password do not match any user in this service",
    });
    cy.screenshot();
  });

  it("Deve exibir mensagem ao inserir senha incorreta", () => {
    cy.validateLoginError({
      email: users.standard_user,
      password: "wrong_password",
      expectedMessage:
        "Epic sadface: Username and password do not match any user in this service",
    });
    cy.screenshot();
  });

  it("Deve realizar login corretamente", () => {
    cy.loginSuccessfully({
      email: users.standard_user,
      password: users.password,
    });
    cy.screenshot();
  });
});
