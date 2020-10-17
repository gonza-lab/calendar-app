import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const isAuth = false;

  return (
    <Router>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/auth" component={AuthScreen} />
        <PrivateRoute isAuth={isAuth} path="/" component={CalendarScreen} />
      </Switch>
    </Router>
  );
};
