import React from "react";
import { withRouter } from "react-router-dom";
import { useAuthorization } from "../Session";
// import * as ROUTES from "../../constants/routes";

const HomePage = ({ history }) => {
  const authStrategy = authUser => !!authUser;
  const isAuthorized = useAuthorization(authStrategy);
  return isAuthorized ? (
    <div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  ) : null;
  // by pushing here, the useAuthorization may be still be in a call and the component has unmounted,
  // leaving an error in the console
  // <>{history.push(ROUTES.SIGN_IN)}</>
};

export default withRouter(HomePage);
