import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter } from "../../TestUtil";
import SignUp, { SignUpLink } from ".";

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

  xit("form renders with error", () => {});
});
