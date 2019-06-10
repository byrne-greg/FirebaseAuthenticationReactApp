import React, { useState, useContext, useEffect } from "react";

import AuthUserContext from "./context";
import { withFirebase, FirebaseContext } from "../Firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component authUser={this.state.authUser} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
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

export default withAuthentication;
export { useAuthentication };
