import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignOut = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push(ROUTES.LANDING), 5000);
  }, [history]);
  return <h1>You have successfully signed out</h1>;
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
      Sign Out
    </button>
  );
};
const SignOutButton = withRouter(SignOutButtonComponent);

export default withRouter(SignOut);
export { SignOutButton };
