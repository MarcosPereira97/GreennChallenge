import "./commands/loginCommands";
import "./commands/productCommands";

// @ts-ignore
Cypress.Commands.overwrite("type", (originalFn, subject, text, options) => {
  if (options && options.log === false) {
    Cypress.log({
      //@ts-ignore
      $el: subject,
      name: "type",
      message: "***",
    });
  }
  //@ts-ignore
  return originalFn(subject, text, options);
});

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
