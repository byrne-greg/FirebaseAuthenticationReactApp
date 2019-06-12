import React from "react";
import { render, cleanup } from "@testing-library/react";
import { withTestRouter } from "../../util/TestUtil";
import { DeleteUserForm, DeleteUserSuccessfulPage } from ".";

afterEach(cleanup);

describe("DeleteUser render tests", () => {
  it("delete user form renders as expected", () => {
    // GIVEN

    // WHEN
    const form = render(withTestRouter(<DeleteUserForm />));

    // THEN
    expect(form.baseElement).toMatchSnapshot();
  });

  it("delete user form renders as expected", () => {
    // GIVEN

    // WHEN
    const page = render(withTestRouter(<DeleteUserSuccessfulPage />));

    // THEN
    expect(page.baseElement).toMatchSnapshot();
  });
});
