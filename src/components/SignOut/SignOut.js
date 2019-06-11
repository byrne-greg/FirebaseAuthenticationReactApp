import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import Routes from "../../constants/Routes";
import text from "./text";

const SignOut = () => {
  return <h1>{text.successfulSignOut}</h1>;
};

const SignOutButtonComponent = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  return (
    <button
      id="sign-out-button"
      type="button"
      onClick={() => {
        firebase.logout();
        history.push(Routes.SIGN_OUT.url);
      }}
    >
      {text.signOut}
    </button>
  );
};
const SignOutButton = withRouter(SignOutButtonComponent);

export default withRouter(SignOut);
export { SignOutButton };
