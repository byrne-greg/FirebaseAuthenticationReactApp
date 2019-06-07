import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter } from "../../TestUtil";
import Home from ".";

afterEach(cleanup);

describe("Home render tests", () => {
  xit("page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<Home />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});
