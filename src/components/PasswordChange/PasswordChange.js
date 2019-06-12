import React, { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import text from "./text";

const PasswordChangePage = () => (
  <div>
    <h1>{text.changePassword}</h1>
    <PasswordChangeForm />
  </div>
);

const NewPasswordInput = ({ newPassword, onNewPasswordChange }) => (
  <>
    <label id="new-password-label">{text.newPassword}</label>
    <input
      aria-labelledby="new-password-label"
      name="new-password"
      value={newPassword}
      onChange={onNewPasswordChange}
      type="password"
      placeholder={text.newPassword}
    />
  </>
);

const ConfirmNewPasswordInput = ({
  confirmNewPassword,
  onConfirmNewPasswordChange
}) => (
  <>
    <label id="confirm-new-password-label">{text.confirmNewPassword}</label>
    <input
      aria-labelledby="confirm-new-password-label"
      name="confirm-new-password"
      value={confirmNewPassword}
      onChange={onConfirmNewPasswordChange}
      type="password"
      placeholder={text.confirmNewPassword}
    />
  </>
);

const SubmitButton = ({ isInvalid }) => (
  <button disabled={isInvalid} type="submit">
    {text.changePassword}
  </button>
);

const ErrorAlert = ({ errorText }) => (
  <div id="submit-error">
    <p>{errorText}</p>
  </div>
);

const PasswordChangeForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const firebase = useContext(FirebaseContext);

  const isInvalid = !newPassword || newPassword !== confirmNewPassword;

  const onSubmit = async event => {
    try {
      await firebase.updatePassword(newPassword);
      setNewPassword("");
      setConfirmNewPassword("");
      setError(null);
    } catch (error) {
      setError({ ...error });
    }

    event.preventDefault();
  };

  const handleChange = ({ event, setState }) => {
    setState(event.target.value);
    setError(null);
  };
  const onNewPasswordChange = event => {
    handleChange({ event, setState: setNewPassword });
  };
  const onConfirmNewPasswordChange = event => {
    handleChange({ event, setState: setConfirmNewPassword });
  };

  return (
    <>
      <h2>{text.changeYourPassword}</h2>
      <form onSubmit={onSubmit}>
        <NewPasswordInput
          newPassword={newPassword}
          onNewPasswordChange={onNewPasswordChange}
        />
        <ConfirmNewPasswordInput
          confirmNewPassword={confirmNewPassword}
          onConfirmNewPasswordChange={onConfirmNewPasswordChange}
        />
        <SubmitButton isInvalid={isInvalid} />
        {error && <ErrorAlert errorText={error.message} />}
      </form>
    </>
  );
};

export default PasswordChangePage;
export { PasswordChangeForm };
