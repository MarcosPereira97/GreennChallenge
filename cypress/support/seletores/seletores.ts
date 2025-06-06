export const SELECTORS = {
  login: {
    username: "[data-test=username]",
    password: "[data-test=password]",
    login_btn: "[data-test=login-button]",
    message_error: 'div[class*="error-message-container"]',
  },
  grid: {
    grid_list: "[data-test='inventory-list']",
    grid_item: "[data-test='inventory-item']",
    add_to_cart_btn: "[data-test='add-to-cart-sauce-labs-backpack']",
    remove_to_cart_btn: "[data-test='remove-sauce-labs-backpack']",
  },
  cart: {
    cart_btn: "[data-test='shopping-cart-link']",
  },
};
