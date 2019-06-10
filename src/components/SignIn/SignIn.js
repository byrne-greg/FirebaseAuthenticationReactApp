import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import text from "./text";

const SignIn = () => (
  <div>
    <h1>{text.signIn}</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const ErrorAlert = ({ errorText }) => (
  <div id="submit-error">
    <p>{errorText}</p>
  </div>
);

const SubmitButton = ({ isInvalid }) => (
  <button id="submit-button" disabled={isInvalid} type="submit">
    {text.signIn}
  </button>
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

const PasswordInput = ({ currentValue, onChange }) => (
  <>
    <label id="password-label">{text.password}</label>
    <input
      aria-labelledby="password-label"
      id="password-input"
      name="password"
      value={currentValue}
      onChange={onChange}
      type="password"
      placeholder={text.password}
    />
  </>
);

const SignInFormComponent = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const firebase = useContext(FirebaseContext);

  const isInvalid = !password || !email;

  const onSubmit = async event => {
    event.preventDefault();
    try {
      await firebase.login(email, password);
      setEmail("");
      setPassword("");
      history.push(ROUTES.HOME);
    } catch (error) {
      setError({ ...error });
    }
  };

  const handleChange = ({ event, setState }) => {
    setState(event.target.value);
    setError(null);
  };
  const onEmailChange = event => {
    handleChange({ event, setState: setEmail });
  };
  const onPasswordChange = event => {
    handleChange({ event, setState: setPassword });
  };

  return (
    <form onSubmit={onSubmit}>
      <EmailInput value={email} onChange={onEmailChange} />
      <PasswordInput value={password} onChange={onPasswordChange} />
      <SubmitButton isInvalid={isInvalid} />
      {error && <ErrorAlert errorText={error.message} />}
    </form>
  );
};
const SignInForm = withRouter(SignInFormComponent);

export default SignIn;
export { SignInForm };
