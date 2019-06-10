import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Landing from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import PasswordForget from "../PasswordForget";
import Home from "../Home";
import Account from "../Account";
// import Admin from "../Admin";
import { FirebaseContextProvider } from "../Firebase";
import { AuthUserContextProvider } from "../Session";
import * as ROUTES from "../../constants/routes";

const App = () => (
  <FirebaseContextProvider>
    <AuthUserContextProvider>
      <Main />
    </AuthUserContextProvider>
  </FirebaseContextProvider>
);

const Main = () => (
  <>
    <h1>Work in Progress</h1>
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_OUT} component={SignOut} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        {/* <Route path={ROUTES.ADMIN} component={Admin} /> */}
      </div>
    </Router>
  </>
);

export default App;
