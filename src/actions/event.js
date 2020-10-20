import { types } from '../types/types';

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventAddNew = (event) => ({
  type: types.envetAddNew,
  payload: event,
});

export const eventClearActive = () => ({
  type: types.eventClearActive,
});

export const eventUpdateActive = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const eventDeleteActive = (id) => ({
  type: types.eventDelete,
  payload: id,
});
