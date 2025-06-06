import { SELECTORS } from "../seletores/seletores";

export class LoginPage {
  getUsernameField() {
    return cy.get(SELECTORS.login.username);
  }

  getPasswordField() {
    return cy.get(SELECTORS.login.password);
  }

  getLoginButton() {
    return cy.get(SELECTORS.login.login_btn);
  }

  getErrorMessage() {
    return cy.get(SELECTORS.login.message_error);
  }
}
