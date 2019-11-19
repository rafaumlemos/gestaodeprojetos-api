import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import UserFeed from './pages/UserFeed';
import PartnerFeed from './pages/PartnerFeed';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={SignInForm} />
      <Route exact path="/sign-up" component={SignUpForm} />
      <PrivateRoute path="/feed/user" component={UserFeed} />
      <PrivateRoute path="/feed/partner" component={PartnerFeed} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;