import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from ".";
import * as ROUTES from "../../constants/routes";

const withAuthorization = authStrategy => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!authStrategy(authUser)) {
          // auth has failed
          this.props.history.push(ROUTES.SIGN_IN);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            authStrategy(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(withFirebase(WithAuthorization));
};

const useAuthorization = authStrategy => {
  const [authorizedStatus, setAuthorizedStatus] = useState(false);

  // const firebase = useContext(FirebaseContext);
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

export default withAuthorization;
export { useAuthorization };
