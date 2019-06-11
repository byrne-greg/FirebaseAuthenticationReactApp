import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../util/TestUtil";
import * as ROUTES from "../../constants/routes";
import { SignInForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("SignIn unit tests", () => {
  test("when email and password inputs don't have text, the submit button is disabled", () => {
    const { getByText } = render(withTestRouter(<SignInForm />));
    const submitButton = getByText(text.signIn);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email input doesn't have text but the password input does, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );

    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signIn);
    expect(submitButton.disabled).toBe(true);
  });

  test("when password input doesn't have text but the email input does, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );

    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signIn);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email and password inputs have text, the submit button is enabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignInForm />)
    );
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "email" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "password" } });

    const submitButton = getByText(text.signIn);
    expect(submitButton.disabled).toBe(false);
  });

  test("when form submit button is clicked, it calls firebase login", () => {
    const firebase = {
      login: jest.fn(Promise.resolve())
    };
    const emailInputText = "email";
    const passwordInputText = "password";

    const { getByLabelText, getByText } = render(
      withTestRouter(withMockFirebase(firebase, <SignInForm />))
    );
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: emailInputText } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: passwordInputText } });
    const submitButton = getByText(text.signIn);
    fireEvent.click(submitButton);

    expect(firebase.login).toHaveBeenCalledWith(
      emailInputText,
      passwordInputText
    );
  });

  xtest("when login was successful, the user is navigated to the home page", () => {});
});
