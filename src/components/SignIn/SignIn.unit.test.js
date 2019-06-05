import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { SignInForm } from ".";
import { withTestRouter, withMockFirebase } from "../../TestUtil";

afterEach(cleanup);

describe("SignIn unit tests", () => {
  test("when email and password inputs don't have text, the submit button is disabled", () => {
    const { getByText } = render(withTestRouter(<SignInForm />));
    const submitButton = getByText("Sign In");
    expect(submitButton.disabled).toBe(true);
  });

  test("when email input doesn't have text but the password input does, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );

    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText("Sign In");
    expect(submitButton.disabled).toBe(true);
  });

  test("when password input doesn't have text but the email input does, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );

    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText("Sign In");
    expect(submitButton.disabled).toBe(true);
  });

  test("when email and password inputs have text, the submit button is enabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );
    const emailInput = getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "email" } });
    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "password" } });

    const submitButton = getByText("Sign In");
    expect(submitButton.disabled).toBe(false);
  });

  test("when form submit button is clicked, it calls firebase login", () => {
    const firebase = {
      login: jest.fn(() =>
        Promise.resolve({
          then: () => {}
        })
      )
    };

    const { getByLabelText, getByText } = render(
      withTestRouter(withMockFirebase(firebase, <SignInForm />))
    );
    const emailInput = getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "email" } });
    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "password" } });
    const submitButton = getByText("Sign In");
    fireEvent.click(submitButton);

    expect(firebase.login).toHaveBeenCalledWith("email", "password");
  });

  xtest("when login was successful, the user is navigated to the home page", () => {});
});
