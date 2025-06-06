import "./commands/loginCommands";
import "./commands/productCommands";

declare global {
  namespace Cypress {
    interface Chainable {
      doLogin(
        email?: string,
        password?: string,
        options?: undefined
      ): Chainable<void>;
      loginSuccessfully(email: string, password: string): Chainable<void>;
      validateLoginError(
        email: string,
        password: string,
        expectedMessage: string
      ): Chainable<void>;
      validateSameImages(): Chainable<void>;
      addProductToCart(): Chainable<void>;
      validateDifferentImages(): Chainable<void>;
      compareProductInfo(): Chainable<void>;
      sortItems(sortOption: number): Chainable<void>;
    }
  }
}
