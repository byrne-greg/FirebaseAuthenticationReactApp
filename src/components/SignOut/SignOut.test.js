import React from "react";
import { shallow, mount } from "enzyme";
import { withTestRouter } from "../../TestUtil";
import SignOut, { SignOutButton } from ".";

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation(init => [init, setState]);

describe("SignOut render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = mount(withTestRouter(<SignOut />));

    // THEN
    expect(page).toMatchSnapshot();
  });

  it("button renders as expected", () => {
    // GIVEN

    // WHEN
    const button = mount(withTestRouter(<SignOutButton />));

    // THEN
    expect(button).toMatchSnapshot();
  });
});

describe("SignOut unit tests", () => {
  xit("sign out button attempts to sign user out", () => {
    // // GIVEN
    // const history = { push: jest.fn() };
    // const firebase = { doSignOut: jest.fn() };
    // // WHEN
    // const button = shallow(
    //   <SignOutButton history={history} firebase={firebase} />
    // );
    // button.find("#sign-out-button").simulate("click");
    // // THEN
    // expect(firebase.doSignOut).toHaveBeenCalled();
    // expect(history.push).toHaveBeenCalled();
  });
});
