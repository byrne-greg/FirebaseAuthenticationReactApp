import React from "react";
import Firebase from "./Firebase";

const FirebaseContext = React.createContext(null);

export const FirebaseContextProvider = ({ children }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    {children}
  </FirebaseContext.Provider>
);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
