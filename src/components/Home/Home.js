import React from "react";
import Unauthorized, { useAuthorization } from "../Session";

const HomePage = () => {
  const authStrategy = authUser => !!authUser;
  const isAuthorized = useAuthorization(authStrategy);
  return isAuthorized ? (
    <div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  ) : (
    <Unauthorized />
  );
};

export default HomePage;
