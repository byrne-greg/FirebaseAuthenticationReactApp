import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import messages from "./messages";

const SignOut = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push(ROUTES.LANDING), 5000);
  }, [history]);
  return <h1>{messages.successfulSignOut}</h1>;
};

const SignOutButtonComponent = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  return (
    <button
      id="sign-out-button"
      type="button"
      onClick={() => {
        firebase.logout();
        history.push(ROUTES.SIGN_OUT);
      }}
    >
      {messages.signOut}
    </button>
  );
};
const SignOutButton = withRouter(SignOutButtonComponent);

export default withRouter(SignOut);
export { SignOutButton };
