import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startEventAddNew = (event) => {
  return async (dispatch, getState) => {
    const { name, uid: _id } = getState().auth;

    try {
      const res = await fetchWithToken('events', event, 'POST');
      const body = await res.json();

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id,
          name,
        };
        dispatch(eventAddNew(event));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const startEventLoad = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('events/');
    const body = await res.json();

    if (body.ok) {
      dispatch(eventLoad(body.eventos));
    }
  };
};

export const startEventUpdate = (event) => {
  return async (dispatch) => {
    const res = await fetchWithToken(`events/${event.id}`, event, 'PUT');
    const body = await res.json();

    if (body.ok) {
      dispatch(eventUpdateActive(event));
    } else {
      Swal.fire('Oops...', body.msg, 'error');
    }
  };
};

export const startEventDelete = (id) => {
  return async (dispatch) => {
    const res = await fetchWithToken(`events/${id}`, {}, 'DELETE');
    const body = await res.json();
    try {
      if (body.ok) {
        dispatch(eventDeleteActive(id));
      } else {
        Swal.fire('Oops...', body.msg, 'error');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const eventLoad = (events) => ({
  type: types.eventLoad,
  payload: events,
});

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
