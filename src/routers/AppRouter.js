import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { isLoged: isAuth, checking: isChecking } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (isChecking) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/auth" component={AuthScreen} />
        <PrivateRoute isAuth={isAuth} path="/" component={CalendarScreen} />
      </Switch>
    </Router>
  );
};
