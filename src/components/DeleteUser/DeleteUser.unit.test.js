import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { withTestRouter, withMockFirebase } from "../../util/TestUtil";
import { DeleteUserForm } from ".";
import text from "./text";

afterEach(cleanup);

describe("DeleteUser unit tests", () => {
  test("when delete confirmation checkbox is unselected, then the delete account button is inactive", () => {
    // GIVEN
    const { getByText } = render(withTestRouter(<DeleteUserForm />));
    const deleteUserButton = getByText(text.deleteAccount);

    // WHEN

    // THEN
    expect(deleteUserButton.disabled).toBe(true);
  });

  test("when delete confirmation checkbox is selected, then the delete account button is active", () => {
    // GIVEN
    const { getByText, getByLabelText } = render(
      withTestRouter(<DeleteUserForm />)
    );

    // WHEN
    const deleteUserConfirmationCheckbox = getByLabelText(
      text.deleteYourAccountQuestion
    );
    fireEvent.click(deleteUserConfirmationCheckbox);

    // THEN
    const deleteUserButton = getByText(text.deleteAccount);
    expect(deleteUserButton.disabled).toBe(false);
  });

  test("when delete button is clicked, then the delete user action is called", () => {
    // GIVEN
    const mockFirebase = {
      deleteUser: jest.fn(Promise.resolve())
    };

    const { getByText, getByLabelText } = render(
      withTestRouter(withMockFirebase(mockFirebase, <DeleteUserForm />))
    );

    // WHEN
    const deleteUserConfirmationCheckbox = getByLabelText(
      text.deleteYourAccountQuestion
    );
    fireEvent.click(deleteUserConfirmationCheckbox);
    const deleteUserButton = getByText(text.deleteAccount);
    fireEvent.click(deleteUserButton);

    // THEN
    expect(mockFirebase.deleteUser).toHaveBeenCalled();
  });
});
