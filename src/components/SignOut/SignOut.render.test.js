import React from "react";
import { withTestRouter } from "../../TestUtil";
import { render, cleanup } from "@testing-library/react";
import SignOut, { SignOutButton } from ".";

afterEach(cleanup);

describe("SignOut render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<SignOut />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("button renders as expected", () => {
    // GIVEN

    // WHEN
    const button = render(withTestRouter(<SignOutButton />));

    // THEN
    expect(button.baseElement).toMatchSnapshot();
  });
});
