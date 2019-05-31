import React from "react";
import { shallow, mount } from "enzyme";
import { withTestRouter } from "../../TestUtil";
import SignIn, { SignInForm } from ".";

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation(init => [init, setState]);

describe("SignIn render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = mount(withTestRouter(<SignIn />));

    // THEN
    expect(page).toMatchSnapshot();
  });

  it("form submit button is disabled when input fields have no text", () => {
    // GIVEN

    // WHEN
    const form = mount(withTestRouter(<SignInForm.WrappedComponent />));
    const submitButton = form.find("#submit-button").props();

    // THEN
    expect(submitButton.disabled).toStrictEqual(true);
  });

  xit("form submit button is enabled when input fields have text", () => {
    // // GIVEN
    // // WHEN
    // let form;
    // act(() => {
    //   form = mount(withTestRouter(<SignInForm.WrappedComponent />));
    // });
    // const emailField = form.find("#email-input-field");
    // emailField.props().value = "email";
    // act(() => {
    //   emailField.props().onChange({ target: { value: "new email" } });
    // });
    // const passwordField = form.find("#password-input-field");
    // passwordField.props().value = "password";
    // act(() => {
    //   passwordField.props().onChange({ target: { value: "new password" } });
    // });
    // const submitButton = form.find("#submit-button").props();
    // // THEN
    // expect(submitButton.disabled).toStrictEqual(false);
    // // expect(form).toMatchSnapshot();
  });

  xit("form renders with error", () => {
    // GIVEN

    // WHEN
    const form = mount(withTestRouter(<SignInForm.WrappedComponent />));

    // THEN
    expect(form).toMatchSnapshot();
  });
});

describe("SignIn unit tests", () => {
  xit("email state changes when email field has text", () => {
    // // GIVEN
    // const signInForm = shallow(<SignInForm />);
    // // WHEN
    // const email = signInForm.find("input").props();
    // // THEN
    // expect(email).toStrictEqual("a");
  });
  xit("password state changes when password field has text", () => {
    // // GIVEN
    // // WHEN
    // // THEN
  });
  xit("login is attempted when submit button is pressed", () => {
    // // GIVEN
    // // WHEN
    // // THEN
  });
});
