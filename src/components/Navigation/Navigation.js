import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { SignOutButton } from "../SignOut";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationPublic />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {/* <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li> */}
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationPublic = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
export { NavigationAuth, NavigationPublic };
