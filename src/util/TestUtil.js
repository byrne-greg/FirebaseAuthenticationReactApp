import React from "react";
import { MemoryRouter } from "react-router-dom";
import { FirebaseContext } from "../components/Firebase";
import { AuthUserContext } from "../components/Session";

const withMockFirebase = (mockFirebase, Component) => (
  <FirebaseContext.Provider value={mockFirebase}>
    {Component}
  </FirebaseContext.Provider>
);

const withMockAuthUserContext = (value, Component) => (
  <AuthUserContext.Provider value={value}>{Component}</AuthUserContext.Provider>
);

const withTestRouter = Component => <MemoryRouter>{Component}</MemoryRouter>;

export { withTestRouter, withMockFirebase, withMockAuthUserContext };
