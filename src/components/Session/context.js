import React from "react";
import { useAuthentication } from ".";

const AuthUserContext = React.createContext(null);

export const AuthUserContextProvider = ({ children }) => (
  <AuthUserContext.Provider value={useAuthentication()}>
    {children}
  </AuthUserContext.Provider>
);

export default AuthUserContext;
