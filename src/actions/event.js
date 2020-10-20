import { types } from '../types/types';

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventAddNew = (event) => ({
  type: types.envetAddNew,
  payload: event,
});
