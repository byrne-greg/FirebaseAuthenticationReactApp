import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter } from "../../TestUtil";
import SignIn from ".";

afterEach(cleanup);

describe("SignIn render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<SignIn />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  xit("form renders with error", () => {});
});
