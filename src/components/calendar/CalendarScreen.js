import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '../ui/navbar/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'moment/locale/es';
import moment from 'moment';

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages';

import { openModal } from '../../actions/ui';
import {
  eventAddNew,
  eventClearActive,
  eventDeleteActive,
  eventSetActive,
} from '../../actions/event';

moment.locale('es');
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const props = {
  urlImage:
    'https://avatars1.githubusercontent.com/u/66537765?s=460&u=23c939f2f6ef1d8733094b61abd9ed57b4b6de20&v=4',
  name: 'Gonzalo Flores',
};

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events: myEventsList, activeEvent } = useSelector(
    (state) => state.calendar
  );

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
    dispatch(openModal());
  };

  const handleNewModal = () => {
    dispatch(openModal());
  };

  const handleDeleteModal = () => {
    dispatch(eventDeleteActive(activeEvent.id));
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem('lastView', e);
  };

  const handleSelectSlot = (e) => {
    dispatch(eventClearActive());
    const { start, end } = e;

    dispatch(
      eventAddNew({
        start,
        end,
        title: 'Modifique el titulo',
        notes: 'Modifique las notas',
        id: new Date().getTime(),
        user: {
          name: 'Gonzalo',
          _id: 123154124,
        },
      })
    );
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
          onSelectSlot={handleSelectSlot}
          selectable={true}
        />
      </div>
      <CalendarModal />
      <button className="calendar-screen__add-event" onClick={handleNewModal}>
        +
      </button>
      <button
        className="calendar-screen__delete-event"
        style={{ opacity: activeEvent ? '1' : '0' }}
        onClick={handleDeleteModal}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};
