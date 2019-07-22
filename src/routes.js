import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from '../src/pages/loginPage/loginPage'
import HomePage from './pages/homePage/homePage'
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/app", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LoginRoute exact path="/" component={LoginPage} />
      <PrivateRoute path="/app" component={HomePage}/>
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;