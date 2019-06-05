import React from "react";
import { shallow, mount } from "enzyme";
import { withTestRouter, withMockFirebase, mockFirebase } from "../../TestUtil";
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

  xit("form renders with error", () => {
    // GIVEN

    // WHEN
    const form = mount(withTestRouter(<SignInForm.WrappedComponent />));

    // THEN
    expect(form).toMatchSnapshot();
  });
});
