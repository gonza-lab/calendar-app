import { types } from '../types/types';

export const uiReducer = (
  state = { modalOpen: false, isLoading: false },
  action
) => {
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

    case types.uiStartLoading:
      return {
        ...state,
        isLoading: true,
      };

    case types.uiFinishLoading:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
