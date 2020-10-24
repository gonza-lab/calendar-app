import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { calendarReducer } from '../reducers/calendarReducer';

import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  calendar: calendarReducer,
});

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
