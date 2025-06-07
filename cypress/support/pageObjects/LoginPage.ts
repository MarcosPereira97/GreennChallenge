import { SELECTORS } from "../seletores/seletores";

export class LoginPage {
  getUsernameField() {
    return cy.getVisible(SELECTORS.login.username);
  }

  getPasswordField() {
    return cy.getVisible(SELECTORS.login.password);
  }

  getLoginButton() {
    return cy.getVisible(SELECTORS.login.login_btn);
  }

  getErrorMessage() {
    return cy.getVisible(SELECTORS.login.message_error);
  }
}
