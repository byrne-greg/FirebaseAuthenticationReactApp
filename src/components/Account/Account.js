import React, { useContext } from "react";
import { AuthUserContext, useAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const AccountPage = () => {
  const authStrategy = authUser => !!authUser;
  const isAuthorized = useAuthorization(authStrategy);
  const authUser = useContext(AuthUserContext);

  return isAuthorized ? (
    <div>
      <h1>Account: {authUser.email}</h1>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  ) : null;
};

export default AccountPage;
