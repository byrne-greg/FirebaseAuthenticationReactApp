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
import routes from "../../constants/Routes";

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
        <Route exact path={routes.LANDING.url} component={Landing} />
        <Route path={routes.SIGN_UP.url} component={SignUp} />
        <Route path={routes.SIGN_IN.url} component={SignIn} />
        <Route path={routes.SIGN_OUT.url} component={SignOut} />
        <Route path={routes.PASSWORD_FORGET.url} component={PasswordForget} />
        <Route path={routes.HOME.url} component={Home} />
        <Route path={routes.ACCOUNT.url} component={Account} />
        {/* <Route path={routes.ADMIN.url} component={Admin} /> */}
      </div>
    </Router>
  </>
);

export default App;
