import { types } from '../types/types';

export const uiReducer = (state = { modalOpen: false }, action) => {
  switch (action.type) {
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    default:
      return state;
  }
};
