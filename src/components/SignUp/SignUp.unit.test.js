import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { withTestRouter, withMockFirebase } from "../../TestUtil";
import { SignUpForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("SignUp unit tests", () => {
  test("when email, username, password, and confirm password inputs don't have text, the submit button is disabled", () => {
    const { getByText } = render(withTestRouter(<SignUpForm />));
    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when username input has text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email input has text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when password input has text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when confirm password input has text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when username and email inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when username and password inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when username and confirm password inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email and password inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email and confirm password inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when password and confirm password inputs have text but other form inputs have no text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when username input doesn't have text but other form inputs have text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when email input doesn't have text but other form inputs have text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when password input doesn't have text but other form inputs have text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when confirm password input doesn't have text but other form inputs have text, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(true);
  });

  test("when all form inputs have text, the submit button is enabled", () => {
    const { getByLabelText, getByText } = render(
      withTestRouter(<SignUpForm />)
    );

    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "a" } });
    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "a" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "a" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "a" } });

    const submitButton = getByText(text.signUp);
    expect(submitButton.disabled).toBe(false);
  });

  xtest("when form submit button is clicked, it calls firebase login", () => {
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
