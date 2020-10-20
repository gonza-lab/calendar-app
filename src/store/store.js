import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { calendarReducer } from '../reducers/calendarReducer';

import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducers = combineReducers({
  ui: uiReducer,
  // TODO auth: authReducer,
  calendar: calendarReducer,
});

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
