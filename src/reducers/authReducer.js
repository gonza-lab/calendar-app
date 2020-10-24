import { types } from '../types/types';

export const authReducer = (
  state = { checking: true, isLoged: false },
  action
) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
        isLoged: true,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
        isLoged: false,
      };

    default:
      return state;
  }
};
