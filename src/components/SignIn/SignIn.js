import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignIn = () => (
  <div>
    <h1>SignIn</h1>
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
    Sign In
  </button>
);

const InputField = ({
  labelText,
  htmlId,
  className,
  name,
  value,
  onChange,
  placeholder
}) => (
  <>
    <label id={`${name}-label`}>{labelText}</label>
    <input
      aria-labelledby={`${name}-label`}
      id={htmlId}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  </>
);

const EmailInputField = ({ currentValue, onChange }) => (
  <InputField
    htmlId="email-input-field"
    name="email"
    value={currentValue}
    onChange={onChange}
    placeholder="Email Address"
    labelText="Email Address"
  />
);

const PasswordInputField = ({ currentValue, onChange }) => (
  <InputField
    htmlId="password-input-field"
    name="password"
    value={currentValue}
    onChange={onChange}
    placeholder="Password"
    labelText="Password"
  />
);

const SignInFormComponent = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const firebase = useContext(FirebaseContext);

  const onSubmit = event => {
    firebase
      .login(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError({ ...error });
      });

    event.preventDefault();
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
      <EmailInputField value={email} onChange={onEmailChange} />
      <PasswordInputField value={password} onChange={onPasswordChange} />
      <SubmitButton isInvalid={!password || !email} />
      {error && <ErrorAlert errorText={error.message} />}
    </form>
  );
};
const SignInForm = withRouter(SignInFormComponent);

export default SignIn;
export { SignInForm };
