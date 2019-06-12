import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import Routes from "../../constants/Routes";
import text from "./text";

const PasswordForgetPage = () => (
  <div>
    <h1>{text.passwordReset}</h1>
    <PasswordForgetForm />
  </div>
);

const EmailInput = ({ currentValue, onChange }) => (
  <>
    <label id="email-label">{text.emailAddress}</label>
    <input
      aria-labelledby="email-label"
      id="email-input"
      name="email"
      value={currentValue}
      onChange={onChange}
      type="email"
      placeholder={text.emailAddress}
    />
  </>
);

const ErrorAlert = ({ errorText }) => (
  <div>
    <p>{errorText}</p>
  </div>
);

const SubmitButton = ({ isInvalid }) => (
  <button disabled={isInvalid} type="submit">
    {text.resetMyPassword}
  </button>
);

const PasswordForgetForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const firebase = useContext(FirebaseContext);

  const isInvalid = !email;

  const onSubmit = async event => {
    try {
      await firebase.resetPassword(email);
      setEmail("");
      setError(null);
    } catch (error) {
      setError({ ...error });
    }

    event.preventDefault();
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <>
      <h2>{text.forgotYourPassword}</h2>
      <form onSubmit={onSubmit}>
        <EmailInput currentValue={email} onChange={handleChange} />
        <SubmitButton isInvalid={isInvalid} />
        {error && <ErrorAlert errorText={error.message} />}
      </form>
    </>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={Routes.PASSWORD_FORGET.url}>{text.forgotPassword}</Link>
  </p>
);

export default PasswordForgetPage;
export { PasswordForgetForm, PasswordForgetLink };
