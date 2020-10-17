import React from 'react';
import { Navbar } from '../ui/navbar/Navbar';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const myEventsList = [
  {
    title: 'Cumpleaños de gonza',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
  },
];

const props = {
  urlImage:
    'https://avatars1.githubusercontent.com/u/66537765?s=460&u=23c939f2f6ef1d8733094b61abd9ed57b4b6de20&v=4',
  name: 'Gonzalo Flores',
};

export const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar {...props} />
      <div className="calendar-screen__container">
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
};
