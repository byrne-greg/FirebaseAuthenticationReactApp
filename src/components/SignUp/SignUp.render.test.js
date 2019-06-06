import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import SignUp, { SignUpForm, SignUpLink } from ".";

afterEach(cleanup);

describe("SignUp render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<SignUp />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("link renders as expected", () => {
    // GIVEN

    // WHEN
    const link = render(withTestRouter(<SignUpLink />));

    // THEN
    expect(link.baseElement).toMatchSnapshot();
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
