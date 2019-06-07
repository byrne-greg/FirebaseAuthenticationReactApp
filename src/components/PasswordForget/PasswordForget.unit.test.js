import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { withMockFirebase } from "../../TestUtil";
import { PasswordForgetForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("PasswordForgetForm unit tests", () => {
  test("when email input doesn't have text, the submit button is disabled", () => {
    const { getByText } = render(<PasswordForgetForm />);
    const resetPasswordButton = getByText(text.resetMyPassword);
    expect(resetPasswordButton.disabled).toBe(true);
  });

  test("when email input has text, the submit button is enabled", () => {
    const { getByLabelText, getByText } = render(<PasswordForgetForm />);

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "email" } });

    const resetPasswordButton = getByText(text.resetMyPassword);
    expect(resetPasswordButton.disabled).toBe(false);
  });

  test("when form submit button is clicked, it calls firebase resetPassword", () => {
    const firebase = {
      resetPassword: jest.fn(Promise.resolve())
    };

    const { getByLabelText, getByText } = render(
      withMockFirebase(firebase, <PasswordForgetForm />)
    );

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "email" } });
    const resetPasswordButton = getByText(text.resetMyPassword);
    fireEvent.click(resetPasswordButton);

    expect(firebase.resetPassword).toHaveBeenCalledWith("email");
  });
});

describe("PasswordForgetLink unit tests", () => {
  xtest("when user clicks password forget link, the user is navigated to the password forget page", () => {});
});
