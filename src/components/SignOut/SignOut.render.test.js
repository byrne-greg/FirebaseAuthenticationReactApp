import React from "react";
import { mount } from "enzyme";
import { withTestRouter } from "../../TestUtil";
import SignOut, { SignOutButton } from ".";

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
