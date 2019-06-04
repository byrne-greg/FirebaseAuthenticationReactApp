import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignOut = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push(ROUTES.LANDING), 5000);
  }, [history]);
  return <h1>You have successfully signed out</h1>;
};

const SignOutButtonComponent = ({ firebase, history }) => (
  <button
    id="sign-out-button"
    type="button"
    onClick={() => {
      firebase.signOut();
      history.push(ROUTES.SIGN_OUT);
    }}
  >
    Sign Out
  </button>
);
const SignOutButton = withRouter(withFirebase(SignOutButtonComponent));

export default withRouter(SignOut);
export { SignOutButton };
