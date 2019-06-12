import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter, withMockAuthUserContext } from "../../util/TestUtil";
import Home from ".";

afterEach(cleanup);

describe("Home render tests", () => {
  it("when user is unauthenticated, the unauthorized page is rendered", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<Home />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("when user is authenticated, the home page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(
      withTestRouter(withMockAuthUserContext({ mockUser: true }, <Home />))
    );

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});
