import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from ".";
import { FirebaseContext } from "../Firebase";

const useAuthorization = authStrategy => {
  const [authorizedStatus, setAuthorizedStatus] = useState(false);
  const currentUser = useContext(AuthUserContext);

  useEffect(() => {
    if (authStrategy(currentUser)) {
      setAuthorizedStatus(true);
    } else {
      setAuthorizedStatus(false);
    }
  }, [authStrategy, currentUser]);

  return authorizedStatus;
};

const useAuthentication = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(authUser => {
      setCurrentUser(authUser);
    });

    return unsubscribe;
  });

  return currentUser;
};

export { useAuthorization, useAuthentication };
