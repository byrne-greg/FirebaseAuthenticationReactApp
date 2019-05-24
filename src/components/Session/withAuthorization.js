import React from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
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

export default withAuthorization;
