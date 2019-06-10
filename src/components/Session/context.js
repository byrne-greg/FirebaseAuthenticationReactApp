import React from "react";
import { useAuthentication } from ".";

const AuthUserContext = React.createContext(null);

const AuthUserContextProvider = ({ children }) => (
  <AuthUserContext.Provider value={useAuthentication()}>
    {children}
  </AuthUserContext.Provider>
);

export default AuthUserContext;
export { AuthUserContextProvider };
