import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import SignIn, { SignInForm } from ".";
import messages from "./messages";

afterEach(cleanup);

describe("SignIn render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<SignIn />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  xit("form renders with error", () => {
    // GIVEN
    const firebase = {
      login: () => Promise.resolve()
    };

    // WHEN
    const { form, getByLabelText, getByText } = render(
      withTestRouter(withMockFirebase(firebase, <SignInForm />))
    );
    const emailInput = getByLabelText(messages.emailAddressLabel);
    fireEvent.change(emailInput, { target: { value: messages.email } });
    const passwordInput = getByLabelText(messages.passwordLabel);
    fireEvent.change(passwordInput, { target: { value: messages.password } });
    const submitButton = getByText(messages.signIn);
    fireEvent.click(submitButton);

    // THEN
    expect(form.baseElement).toMatchSnapshot();
  });
});
