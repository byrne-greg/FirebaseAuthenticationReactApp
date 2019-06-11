import text from "./Routes.text.js";

export default {
  LANDING: { url: "/", title: text.LANDING },
  SIGN_UP: { url: "/signup", title: text.SIGN_UP },
  SIGN_IN: { url: "/signin", title: text.SIGN_IN },
  SIGN_OUT: { url: "/signout", title: text.SIGN_OUT },
  HOME: { url: "/home", title: text.HOME },
  ACCOUNT: { url: "/account", title: text.ACCOUNT },
  ADMIN: { url: "/admin", title: text.ADMIN },
  PASSWORD_FORGET: {
    url: "/pw-forget",
    title: text.PASSWORD_FORGET
  }
};
