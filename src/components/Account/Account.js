import React, { useContext } from "react";
import { AuthUserContext, useAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import Unauthorized from "../Session";

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
  ) : (
    <Unauthorized />
  );
};

export default AccountPage;
