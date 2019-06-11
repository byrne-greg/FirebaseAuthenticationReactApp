import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter, withMockAuthUserContext } from "../../TestUtil";
import Account from ".";

afterEach(cleanup);

describe("Navigation render tests", () => {
  it("when user is unauthenticated, the public navigation bar renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<Account />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });

  it("when user is authenticated, the authenticated account page renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(
      withTestRouter(withMockAuthUserContext({ mockUser: true }, <Account />))
    );

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});