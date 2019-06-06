import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import SignIn, { SignInForm } from ".";

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
    const emailInput = getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "email" } });
    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "password" } });
    const submitButton = getByText("Sign In");
    fireEvent.click(submitButton);

    // THEN
    expect(form.baseElement).toMatchSnapshot();
  });
});
