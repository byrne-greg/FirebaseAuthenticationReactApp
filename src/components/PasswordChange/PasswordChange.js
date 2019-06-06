import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import text from "./text";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .updatePassword(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <>
        <h2>{text.changeYourPassword}</h2>
        <form onSubmit={this.onSubmit}>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder={text.newPassword}
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder={test.confirmNewPassword}
          />
          <button disabled={isInvalid} type="submit">
            {text.resetMyPassword}
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}

export default withFirebase(PasswordChangeForm);
