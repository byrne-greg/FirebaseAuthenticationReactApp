import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import { SignOutButton } from ".";
import messages from "./messages";

afterEach(cleanup);

describe("SignOut unit tests", () => {
  xtest("when time has elapsed on page, the user is redirected to the landing page", () => {});

  test("when signout button is pressed, firebase logout is called", () => {
    const firebase = {
      logout: jest.fn(() =>
        Promise.resolve({
          then: () => {}
        })
      )
    };

    const { getByText } = render(
      withTestRouter(withMockFirebase(firebase, <SignOutButton />))
    );

    const signOutButton = getByText(messages.signOut);
    fireEvent.click(signOutButton);

    expect(firebase.logout).toHaveBeenCalled();
  });

  xtest("when signout button is pressed, user is navigated to signout page", () => {});
});
