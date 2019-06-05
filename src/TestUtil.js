import React from "react";
import { MemoryRouter } from "react-router-dom";
import { FirebaseContext } from "./components/Firebase";

const withMockFirebase = (mockFirebase, Component) => (
  <FirebaseContext.Provider value={mockFirebase}>
    {Component}
  </FirebaseContext.Provider>
);

const withTestRouter = Component => <MemoryRouter>{Component}</MemoryRouter>;

export { withTestRouter, withMockFirebase };
