import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import SignIn, { SignInForm } from ".";
import text from "./text";

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
