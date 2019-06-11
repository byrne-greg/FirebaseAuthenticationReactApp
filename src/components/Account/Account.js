import React, { useContext } from "react";
import { AuthUserContext, useAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import { PasswordChangeForm } from "../PasswordChange";
import { DeleteUserForm } from "../DeleteUser";
import Unauthorized from "../Session";

const AccountPage = () => {
  const authStrategy = authUser => !!authUser;
  const isAuthorized = useAuthorization(authStrategy);
  const authUser = useContext(AuthUserContext);

  return isAuthorized && authUser ? (
    <div>
      <h1>Account: {authUser.email}</h1>
      <PasswordForgetForm />
      <PasswordChangeForm />
      <DeleteUserForm />
    </div>
  ) : (
    <Unauthorized />
  );
};

export default AccountPage;
