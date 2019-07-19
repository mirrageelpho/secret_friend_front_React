import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '../src/pages/login/login'
import App from './pages/app/app'
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
      <LoginRoute exact path="/" component={Login} />
      <PrivateRoute path="/app" component={App}/>
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;