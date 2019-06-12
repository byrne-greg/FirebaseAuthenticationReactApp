import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter, withMockAuthUserContext } from "../../util/TestUtil";
import Navigation from ".";

afterEach(cleanup);

describe("Navigation render tests", () => {
  it("when user is unauthenticated, the public navigation bar renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<Navigation />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("when user is authenticated, the authenticated user navigation bar renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(
      withTestRouter(
        withMockAuthUserContext({ mockUser: true }, <Navigation />)
      )
    );

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});
