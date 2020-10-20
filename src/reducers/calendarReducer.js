import moment from 'moment';
import { types } from '../types/types';

const events = [
  {
    title: 'Cumpleaños de gonza',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    user: {
      name: 'Gonzalo',
      _id: 12354234,
    },
    id: new Date().getTime(),
  },
];

export const calendarReducer = (
  state = { events, activeEvent: null },
  action
) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.envetAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventClearActive:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };

    case types.eventDelete:
      return {
        ...state,
        events: state.events.reduce(
          (acu, curr) => (curr.id === action.payload ? acu : [...acu, curr]),
          []
        ),
      };

    default:
      return state;
  }
};
