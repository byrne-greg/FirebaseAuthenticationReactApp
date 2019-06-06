import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import text from "./text";

const SignUpPage = () => (
  <div>
    <h1>{text.signUp}</h1>
    <SignUpForm />
  </div>
);

const UsernameInput = ({ username, handleChange }) => (
  <>
    <label id="username-label">{text.username}</label>
    <input
      aria-labelledby="username-label"
      id="username-input"
      name="username"
      value={username}
      onChange={handleChange}
      type="text"
      placeholder={text.username}
    />
  </>
);

const EmailInput = ({ email, handleChange }) => (
  <>
    <label id="email-label">{text.emailAddress}</label>
    <input
      aria-labelledby="email-label"
      id="email-input"
      name="email"
      value={email}
      onChange={handleChange}
      type="text"
      placeholder={text.emailAddress}
    />
  </>
);

const PasswordInput = ({ password, handleChange }) => (
  <>
    <label id="password-label">{text.password}</label>
    <input
      aria-labelledby="password-label"
      id="password-input"
      name="password"
      value={password}
      onChange={handleChange}
      type="password"
      placeholder={text.password}
    />
  </>
);

const ConfirmPasswordInput = ({ confirmPassword, handleChange }) => (
  <>
    <label id="confirm-password-label">{text.confirmPassword}</label>
    <input
      aria-labelledby="confirm-password-label"
      id="confirm-password-input"
      name="confirm-password"
      value={confirmPassword}
      onChange={handleChange}
      type="password"
      placeholder={text.confirmPassword}
    />
  </>
);

const ErrorAlert = ({ errorText }) => (
  <div id="submit-error">
    <p>{errorText}</p>
  </div>
);

const SubmitButton = ({ isInvalid }) => (
  <button id="submit-button" disabled={isInvalid} type="submit">
    {text.signUp}
  </button>
);

const SignUpFormComponent = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const firebase = useContext(FirebaseContext);

  const isInvalid =
    !email || !username || !password || password !== confirmPassword;

  const onSubmit = async event => {
    try {
      const authUser = await firebase.createUser(email, password);
      // Create a user in your Firebase realtime database
      firebase.user(authUser.user.uid).set({
        username,
        email
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      history.push(ROUTES.HOME);
    } catch (error) {
      setError(error);
    }

    event.preventDefault();
  };

  const handleChange = event => {
    const value = event.target.value;
    switch (event.target.name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm-password":
        setConfirmPassword(value);
        break;
      default:
        return; // do nothing
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <UsernameInput username={username} handleChange={handleChange} />
      <EmailInput email={email} handleChange={handleChange} />
      <PasswordInput password={password} handleChange={handleChange} />
      <ConfirmPasswordInput
        confirmPassword={confirmPassword}
        handleChange={handleChange}
      />
      <SubmitButton isInvalid={isInvalid} />
      {error && <ErrorAlert errorText={error.message} />}
    </form>
  );
};

const SignUpForm = withRouter(SignUpFormComponent);

const SignUpLink = () => (
  <p>
    {`${text.dontHaveAccount} `}
    <Link to={ROUTES.SIGN_UP}>{text.signUp}</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
