import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../TestUtil";
import PasswordForget, { PasswordForgetLink } from ".";
import text from "./text";

afterEach(cleanup);

describe("PasswordForget render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<PasswordForget />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("link renders as expected", () => {
    // GIVEN

    // WHEN
    const link = render(withTestRouter(<PasswordForgetLink />));

    // THEN
    expect(link.baseElement).toMatchSnapshot();
  });

  xit("form renders with error", () => {});
});
