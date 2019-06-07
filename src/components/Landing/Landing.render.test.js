import React from "react";
import { render, cleanup } from "@testing-library/react";
import Landing from ".";

afterEach(cleanup);

describe("Landing render tests", () => {
  it("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(<Landing />);

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});
