import React, { useEffect } from 'react';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal as closeModalAction } from '../../actions/ui';
import {
  eventClearActive,
  startEventAddNew,
  startEventUpdate,
} from '../../actions/event';

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const endDate = moment().minutes(0).seconds(0).add(2, 'hours');

const initValues = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: endDate.toDate(),
};

export const CalendarModal = () => {
  const dispatch = useDispatch();

  const { ui, calendar } = useSelector((state) => state);

  const [formValues, handleInputChange, reset] = useForm(initValues);

  const { title, notes, start, end } = formValues;

  const { modalOpen } = ui;
  const { activeEvent } = calendar;

  useEffect(() => {
    if (activeEvent) {
      reset(activeEvent);
    }
  }, [activeEvent, reset]);

  const closeModal = () => {
    dispatch(eventClearActive());
    dispatch(closeModalAction());
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeEvent) {
      dispatch(startEventUpdate({ ...activeEvent, ...formValues }));
    } else {
      dispatch(startEventAddNew(formValues));
    }

    closeModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-fondo"
      className="animate__animated animate__backInDown modal"
      closeTimeoutMS={999}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={(e) =>
              handleInputChange({ target: { value: e, name: 'start' } })
            }
            value={start}
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={(e) =>
              handleInputChange({ target: { value: e, name: 'end' } })
            }
            value={end}
            minDate={start}
          />
        </div>

        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
