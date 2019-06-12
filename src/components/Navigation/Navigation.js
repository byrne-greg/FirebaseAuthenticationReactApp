import React, { useContext } from "react";
import { Link } from "react-router-dom";

import routes from "../../constants/Routes";
import { SignOutButton } from "../SignOut";
import { AuthUserContext } from "../Session";

const Navigation = () => {
  const authUser = useContext(AuthUserContext);
  return authUser ? <NavigationAuth /> : <NavigationPublic />;
};

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={routes.LANDING.url}>{routes.LANDING.title}</Link>
      </li>
      <li>
        <Link to={routes.HOME.url}>{routes.HOME.title}</Link>
      </li>
      <li>
        <Link to={routes.ACCOUNT.url}>{routes.ACCOUNT.title}</Link>
      </li>
      {/* <li>
        <Link to={routes.ADMIN.url}>Admin</Link>
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
        <Link to={routes.LANDING.url}>{routes.LANDING.title}</Link>
      </li>
      <li>
        <Link to={routes.SIGN_IN.url}>{routes.SIGN_IN.title}</Link>
      </li>
      <li>
        <Link to={routes.SIGN_UP.url}>{routes.SIGN_UP.title}</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
export { NavigationAuth, NavigationPublic };
