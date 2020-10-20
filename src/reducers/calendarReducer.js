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

    default:
      return state;
  }
};
