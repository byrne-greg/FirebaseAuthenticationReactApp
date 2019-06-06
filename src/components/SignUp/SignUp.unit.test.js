import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { withTestRouter, withMockFirebase } from "../../TestUtil";
import { SignUpForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("SignUpForm unit tests", () => {
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

  test("when form submit button is clicked, it calls firebase createUser", () => {
    const firebase = {
      createUser: jest.fn(Promise.resolve())
    };

    const { getByLabelText, getByText } = render(
      withTestRouter(withMockFirebase(firebase, <SignUpForm />))
    );
    const emailInput = getByLabelText(text.emailAddress);
    fireEvent.change(emailInput, { target: { value: "email" } });
    const usernameInput = getByLabelText(text.username);
    fireEvent.change(usernameInput, { target: { value: "username" } });
    const passwordInput = getByLabelText(text.password);
    fireEvent.change(passwordInput, { target: { value: "password" } });
    const confirmPasswordInput = getByLabelText(text.confirmPassword);
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

    const submitButton = getByText(text.signUp);
    fireEvent.click(submitButton);

    expect(firebase.createUser).toHaveBeenCalledWith("email", "password");
  });

  xtest("when login was successful, the user is navigated to the home page", () => {});
});

describe("SignUpLink unit tests", () => {
  xtest("when link is clicked, user is navigated to sign up page", () => {});
});
