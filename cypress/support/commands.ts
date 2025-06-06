import "./commands/loginCommands";
import "./commands/productCommands";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      addProductToCart(): Chainable<void>;
    }
  }
}
