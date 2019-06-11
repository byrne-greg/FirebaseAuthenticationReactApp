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
import Routes from "../../constants/Routes";

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
        <Route exact path={Routes.LANDING.url} component={Landing} />
        <Route path={Routes.SIGN_UP.url} component={SignUp} />
        <Route path={Routes.SIGN_IN.url} component={SignIn} />
        <Route path={Routes.SIGN_OUT.url} component={SignOut} />
        <Route path={Routes.PASSWORD_FORGET.url} component={PasswordForget} />
        <Route path={Routes.HOME.url} component={Home} />
        <Route path={Routes.ACCOUNT.url} component={Account} />
        {/* <Route path={Routes.ADMIN.url} component={Admin} /> */}
      </div>
    </Router>
  </>
);

export default App;
