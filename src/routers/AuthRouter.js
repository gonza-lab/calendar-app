import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../components/ui/login-register/Login';
import { Register } from '../components/ui/login-register/Register';

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      <Redirect to="/auth/login"  />
    </Switch>
  );
};
