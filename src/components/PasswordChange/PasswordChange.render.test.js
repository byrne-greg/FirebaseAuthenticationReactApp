import React from "react";
import { render, cleanup } from "@testing-library/react";
import PasswordChange from ".";

afterEach(cleanup);

describe("PasswordForget render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(<PasswordChange />);

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  xit("form renders with error", () => {});
});
