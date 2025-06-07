export interface LoginData {
  email?: string;
  password?: string;
  expectedMessage?: string;
}

export interface CheckoutData {
  username?: string;
  lastname?: string;
  zipcode?: string;
  expectedMessage?: string;
}

export interface URL {
  url: string;
}
