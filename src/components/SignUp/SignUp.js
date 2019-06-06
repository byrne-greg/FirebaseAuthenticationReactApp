import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import text from "./text";

const SignUpPage = () => (
  <div>
    <h1>{text.signUp}</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .createUser(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    // requires email, username, password one, password one equals password two
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <label id={`username-label`}>{text.username}</label>
        <input
          aria-labelledby={`username-label`}
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder={text.username}
        />
        <label id={`email-label`}>{text.emailAddress}</label>
        <input
          aria-labelledby={`email-label`}
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder={text.emailAddress}
        />{" "}
        <label id={`password-label`}>{text.password}</label>
        <input
          aria-labelledby={`password-label`}
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder={text.password}
        />
        <label id={`confirm-password-label`}>{text.confirmPassword}</label>
        <input
          aria-labelledby={`confirm-password-label`}
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder={text.confirmPassword}
        />
        <button disabled={isInvalid} type="submit">
          {text.signUp}
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
