import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { withMockFirebase } from "../../TestUtil";
import { PasswordChangeForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("PasswordChangeForm unit tests", () => {
  test("when inputs don't have text, the submit button is disabled", () => {
    const { getByText } = render(<PasswordChangeForm />);
    const changePasswordButton = getByText(text.changePassword);
    expect(changePasswordButton.disabled).toBe(true);
  });

  test("when new password input has text but confirm new password doesn't, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(<PasswordChangeForm />);

    const newPassword = getByLabelText(text.newPassword);
    fireEvent.change(newPassword, { target: { value: "new password" } });

    const changePasswordButton = getByText(text.changePassword);
    expect(changePasswordButton.disabled).toBe(true);
  });

  test("when confirm new password input has text but new password doesn't, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(<PasswordChangeForm />);

    const confirmNewPassword = getByLabelText(text.confirmNewPassword);
    fireEvent.change(confirmNewPassword, { target: { value: "new password" } });

    const changePasswordButton = getByText(text.changePassword);
    expect(changePasswordButton.disabled).toBe(true);
  });

  test("when both inputs have text that don't match, the submit button is disabled", () => {
    const { getByLabelText, getByText } = render(<PasswordChangeForm />);

    const newPassword = getByLabelText(text.newPassword);
    fireEvent.change(newPassword, { target: { value: "password1" } });
    const confirmNewPassword = getByLabelText(text.confirmNewPassword);
    fireEvent.change(confirmNewPassword, { target: { value: "password2" } });

    const changePasswordButton = getByText(text.changePassword);
    expect(changePasswordButton.disabled).toBe(true);
  });

  test("when both inputs have text that match, the submit button is enabled", () => {
    const { getByLabelText, getByText } = render(<PasswordChangeForm />);

    const newPassword = getByLabelText(text.newPassword);
    fireEvent.change(newPassword, { target: { value: "password" } });
    const confirmNewPassword = getByLabelText(text.confirmNewPassword);
    fireEvent.change(confirmNewPassword, { target: { value: "password" } });

    const changePasswordButton = getByText(text.changePassword);
    expect(changePasswordButton.disabled).toBe(false);
  });

  test("when form submit button is clicked, it calls firebase.updatePassword", () => {
    const firebase = {
      updatePassword: jest.fn(Promise.resolve())
    };

    const { getByLabelText, getByText } = render(
      withMockFirebase(firebase, <PasswordChangeForm />)
    );

    const newPassword = getByLabelText(text.newPassword);
    fireEvent.change(newPassword, { target: { value: "password" } });
    const confirmNewPassword = getByLabelText(text.confirmNewPassword);
    fireEvent.change(confirmNewPassword, { target: { value: "password" } });
    const changePasswordButton = getByText(text.changePassword);
    fireEvent.click(changePasswordButton);

    expect(firebase.updatePassword).toHaveBeenCalledWith("password");
  });
});
