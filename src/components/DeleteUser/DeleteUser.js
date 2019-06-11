import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import text from "./text";
import { AuthUserContext } from "../Session";
import Routes from "../../constants/Routes";

const DeleteUserSuccessfulPage = () => (
  <div>
    <h1>{text.accountDeleted}</h1>
    <p>{text.accountIsDeleted}</p>
  </div>
);

const ErrorAlert = ({ errorText }) => (
  <div id="submit-error">
    <p>{errorText}</p>
  </div>
);

const DeleteUserFormComponent = ({ history }) => {
  const [isDeletionConfirmed, setIsDeletionConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const authUser = useContext(AuthUserContext);

  const handleChange = event => {
    setIsDeletionConfirmed(event.target.checked);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await authUser.delete();
      history.push(Routes.DELETED_USER.url);
    } catch (error) {
      setError({ ...error });
    }
  };

  return (
    <>
      <h2>{text.deleteYourAccount}</h2>
      <form onSubmit={handleSubmit}>
        <label id="confirm-delete-user-label">
          {text.deleteYourAccountQuestion}
        </label>
        <input
          aria-labelledby="confirm-delete-user-label"
          type="checkbox"
          name="confirm-delete"
          onChange={handleChange}
          value={isDeletionConfirmed}
        />
        <button
          id="submit-button"
          disabled={!isDeletionConfirmed}
          type="submit"
        >
          {text.deleteAccount}
        </button>
        {error && <ErrorAlert errorText={error.message} />}
      </form>
    </>
  );
};
const DeleteUserForm = withRouter(DeleteUserFormComponent);

export { DeleteUserSuccessfulPage, DeleteUserForm };
