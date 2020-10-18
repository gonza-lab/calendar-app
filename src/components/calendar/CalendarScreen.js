import React, { useState } from 'react';
import { Navbar } from '../ui/navbar/Navbar';
import { CalendarEvent } from './CalendarEvent';

import 'moment/locale/es';
import moment from 'moment';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages';

moment.locale('es');
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [
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

const props = {
  urlImage:
    'https://avatars1.githubusercontent.com/u/66537765?s=460&u=23c939f2f6ef1d8733094b61abd9ed57b4b6de20&v=4',
  name: 'Gonzalo Flores',
};

export const CalendarScreen = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const eventStyleGetter = (e, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };
  };

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem('lastView', e);
  };

  return (
    <div className="calendar-screen">
      <Navbar {...props} />
      <div className="calendar-screen__container">
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={onSelectEvent}
          onDoubleClickEvent={onDoubleClick}
          view={lastView}
          onView={onViewChange}
          components={{
            event: CalendarEvent,
          }}
        />
      </div>
    </div>
  );
};
